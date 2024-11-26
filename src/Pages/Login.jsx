// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
//  import './Login.css'; // Import the CSS file


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      // Handle successful login (e.g., save token, redirect)
      console.log('Login successful:', response.data);
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className='log'>  
    <div className="container-logi">
      <h2>Login</h2>
      <form className='form-login' onSubmit={handleLogin}>
        <input className='in'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          />
        <input className='in' 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          />
        <button className='bt' type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="loginfood">
        <img src="https://th.bing.com/th?id=OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
      </div>
    </div>
          </div>
  );
};

export default Login;
