import './App.css';
import { FaBars, FaSearch, FaMicrophone, FaVideo, FaBell, FaUserCircle } from 'react-icons/fa';

function App() {
  return (
    <header className="yt-header">
      <div className="left-section">
        <FaBars className="icon" />
        <div className="yt-logo">
          <span className="logo-icon">▶️</span>
          <span className="logo-text">YouTube</span>
        </div>
      </div>

      <div className="center-section">
        <input className="search-input" type="text" placeholder="Search" />
        <button className="search-button"><FaSearch /></button>
        <FaMicrophone className="mic-icon" />
      </div>

      <div className="right-section">
        <FaVideo className="icon" />
        <FaBell className="icon" />
        <FaUserCircle className="icon user-icon" />
      </div>
    </header>
  );
}

export default App;
