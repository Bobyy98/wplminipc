// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pclogo.png';
import '../styles/Navbar.css';

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('username'); // Clear username from localStorage on logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Website Logo" className="logo" height="40" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/wip">Pre-Build PC</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/pc-components">PC Components</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/wip">Guides</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/wip">Contact Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/rate">Rate Us</Link></li>
          </ul>
          <ul className="navbar-nav">
            {user ? (
              <>
                <li className="nav-item"><span className="nav-link welcome-message">Welcome, {user}!</span></li>
                <li className="nav-item"><Link className="nav-link" to="#" onClick={handleLogout}>Logout</Link></li>
              </>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/signin">Sign Up</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
