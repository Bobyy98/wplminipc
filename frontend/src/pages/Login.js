// Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Login.css';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        const userData = await response.json();
        setUser(userData.username);
        localStorage.setItem('username', userData.username); // Save the username in localStorage
        navigate('/'); // Redirect to Home
    } else {
        const errorData = await response.json();
        alert(errorData.message || 'Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="login-background">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-form-row">
            <div className="login-form-group">
              <label htmlFor="username"><i className="fas fa-user"></i> Username</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
          </div>
          <div className="login-form-row">
            <div className="login-form-group">
              <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
          </div>
          <div className="login-form-row">
            <div className="login-form-group">
              <Link to="/forgot-password" className="login-forgot-password">Forgot Password?</Link>
            </div>
          </div>
          <div className="login-form-row">
            <button type="submit" className="login-button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
