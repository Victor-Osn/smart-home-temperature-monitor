import './styles.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="dashboard-title">Smart Home Temperature Monitor</h1>

      <div className="temperature-card">
        <h2>Current Temperature</h2>
        <p className="temperature-value">24°C</p>
        <p className="status-text">Status: Normal</p>
      </div>

      <div className="readings-card">
        <h2>Recent Readings</h2>
        <ul className="readings-list">
          <li>22°C</li>
          <li>24°C</li>
          <li>26°C</li>
          <li>28°C</li>
        </ul>
      </div>

      <button className="refresh-button">Refresh Temperature</button>
    </div>
  );
}

export default App;
