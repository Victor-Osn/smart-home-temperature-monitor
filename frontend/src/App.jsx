import { useEffect, useState } from 'react';
import './styles.css';

function App() {
  const [readings, setReadings] = useState([]);
  const [currentTemperature, setCurrentTemperature] = useState(null);
  const [status, setStatus] = useState('');

  // Load the latest temperature data when the app starts
  useEffect(() => {
    fetchCurrentTemperature();
    fetchTemperatureHistory();
  }, []);

  const fetchCurrentTemperature = async () => {
    const response = await fetch('http://localhost:5000/api/temperature/current');
    const data = await response.json();

    setCurrentTemperature(data.temperature);
    setStatus(data.status);
  };

  const fetchTemperatureHistory = async () => {
    const response = await fetch('http://localhost:5000/api/temperature/history');
    const data = await response.json();

    setReadings([...data.readings].reverse().slice(0, 5));
  };

  // Ask the backend to generate a new temperature reading
  const refreshTemperature = async () => {
    const response = await fetch('http://localhost:5000/api/temperature/refresh', {
      method: 'POST'
    });

    const data = await response.json();

    setCurrentTemperature(data.temperature);
    setStatus(data.status);
    setReadings([...data.readings].reverse().slice(0, 5));
  };

  return (
    <div className="app-container">
      <h1 className="dashboard-title">Smart Home Temperature Monitor</h1>

      <div className="temperature-card">
        <h2>Current Temperature</h2>
        <p className="temperature-value">
          {currentTemperature !== null ? `${currentTemperature}°C` : 'Loading...'}
        </p>
        <p className={`status-text ${status ? `status-${status.toLowerCase()}` : ''}`}>
  Status: {status || 'Loading...'}</p>
      </div>

      <div className="readings-card">
        <h2>Latest 5 Readings</h2>
        <ul className="readings-list">
          {readings.map((reading, index) => (
            <li key={index}>{reading}°C</li>
          ))}
        </ul>
      </div>

      <button className="refresh-button" onClick={refreshTemperature}>
        Refresh Temperature
      </button>
    </div>
  );
}

export default App;