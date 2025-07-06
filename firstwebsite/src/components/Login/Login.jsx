import React, { useState } from 'react';
import './login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add real authentication here
    onLogin();
  };

  const handleGoogleLogin = () => {
    // You can add Google login logic here
    onLogin();
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <div className="login-divider">or</div>
        <button type="button" className="google-login" onClick={handleGoogleLogin}>
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;