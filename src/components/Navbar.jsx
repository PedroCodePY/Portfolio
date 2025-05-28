import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Tutup menu saat link diklik (optional)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar" style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', padding: '0', backgroundColor: darkMode ? '#333' : '#333'}}>
      <div className="logo" style={{width: '75px', height: '75px'}}>
        <img src="/Logo2.svg" alt="" className='Logo'/>
      </div>

      {/* Hamburger icon */}
      <div 
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if(e.key === 'Enter') setMenuOpen(!menuOpen) }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links-container ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#achievements" onClick={handleLinkClick}>Achievements</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><button className='btn btn-light' style={{width: '120px', height: '50px', fontSize: '1em', fontWeight: 600, borderRadius: '10px', color: '#000', border: 'none'}} onClick={() => window.location.href = "#contact"}>Contact Me</button></li>
        </ul>
      </div>
    </nav>
  );
}
