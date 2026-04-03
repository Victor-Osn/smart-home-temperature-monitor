import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Simulated temperature readings
let temperatureReadings = [22, 24, 26, 28, 30, 21, 19, 25, 27, 23];

// Function to get the latest temperature
const getLatestTemperature = () => {
  return temperatureReadings[temperatureReadings.length - 1];
};

// Function to get temperature status
const getTemperatureStatus = (temp) => {
  if (temp < 18) return 'Cold';
  if (temp <= 27) return 'Normal';
  return 'Hot';
};

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Smart Home Temperature Monitor API is running' });
});

// Get current temperature
app.get('/api/temperature/current', (req, res) => {
  const currentTemp = getLatestTemperature();
  res.json({
    temperature: currentTemp,
    status: getTemperatureStatus(currentTemp)
  });
});

// Get temperature history
app.get('/api/temperature/history', (req, res) => {
  res.json({
    readings: temperatureReadings
  });
});

// Refresh and generate a new simulated reading
app.post('/api/temperature/refresh', (req, res) => {
  const newReading = Math.floor(Math.random() * 15) + 16;
  temperatureReadings.push(newReading);

  if (temperatureReadings.length > 10) {
    temperatureReadings.shift();
  }

  res.json({
    temperature: newReading,
    status: getTemperatureStatus(newReading),
    readings: temperatureReadings
  });
});

app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});
