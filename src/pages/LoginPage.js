import React, { useState } from 'react';
import config  from '../config';

const Login = () => {
  if (localStorage.getItem('token')) {
    window.location.href = '/products';
  }
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const baseUrl = config.baseUrl;
  const endpoint = config.endpoints.tokens(config.account);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const credentials = btoa(`${email}:${password}`);
      const request = await fetch(`${baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.api+json',
          'Authorization': `Basic ${credentials}`,
        },
      });
      const payload = await request.json();
      localStorage.setItem('token', payload.data.attributes.token);
      setError('');
      window.location.href = '/products';
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;