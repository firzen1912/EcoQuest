import { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <header className="App-header">
        <button onClick={toggleDarkMode} className="toggle-btn">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        <h1 className="App-title">EcoQuest: Clean & Earn</h1>
        <p className="App-description">
          Welcome to EcoQuest! 🌎✨
        </p>
        <p className="App-text">
          Explore your community, clean up litter, and earn points by snapping photos of your efforts.
          Points can be redeemed for real-world rewards — all while helping the planet!
        </p>
        <div className="App-rules">
          <h2>How It Works:</h2>
          <ul>
            <li>📸 Take photos of trash you clean up.</li>
            <li>📍 Each photo must be at least 1 mile apart.</li>
            <li>🕒 Limit: 3–4 submissions per day.</li>
            <li>🎁 Earn points and redeem rewards!</li>
          </ul>
        </div>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Your EcoQuest
        </a>
      </header>
    </div>
  );
}

export default App;
