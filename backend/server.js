import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Store simulated temperature readings in memory
let temperatureReadings = [22, 24, 26, 28, 30, 21, 19, 25, 27, 23];

// Return the most recent temperature reading
const getLatestTemperature = () => {
  return temperatureReadings[temperatureReadings.length - 1];
};

// Classify the temperature into a simple status label
const getTemperatureStatus = (temp) => {
  if (temp < 18) return 'Cold';
  if (temp <= 27) return 'Normal';
  return 'Hot';
};

// Simple test route to confirm the backend is running
app.get('/', (req, res) => {
  res.json({ message: 'Smart Home Temperature Monitor API is running' });
});

// Return the latest temperature and its status
app.get('/api/temperature/current', (req, res) => {
  const currentTemp = getLatestTemperature();

  res.json({
    temperature: currentTemp,
    status: getTemperatureStatus(currentTemp)
  });
});

// Return the recent temperature readings
app.get('/api/temperature/history', (req, res) => {
  res.json({
    readings: temperatureReadings
  });
});

// Generate a new simulated reading and keep only the latest 10 readings
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
  console.log(`Server is running on http://localhost:${PORT}`);
});