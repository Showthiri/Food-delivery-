
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', { email, password });
      // Handle successful signup (e.g., redirect to login)
      console.log('Signup successful:', response.data);
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className='container-signup'>
      <div className="myH2">
      <h2>Create Account</h2>
      </div>
      <div className="myForm">
      <form  onSubmit={handleSignup}>
        <input className=' in'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input  className=' in'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button className='bt' type="submit">Sign Up</button>
      </form>
      </div>
      {error && <p>{error}</p>}
      <div className="signupfood">
        <img src="https://th.bing.com/th?id=OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
      </div>
    </div>
  );
};

export default Signup;
