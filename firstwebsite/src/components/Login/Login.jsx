import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('loggedIn', 'true');
    if (onLogin) onLogin(); // ✅ Notify Main
    navigate('/dashboard'); // ✅ Go to dashboard
  };

  const handleGoogleLogin = () => {
    localStorage.setItem('loggedIn', 'true');
    if (onLogin) onLogin(); // ✅ Same flow
    navigate('/dashboard');
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
        
        {/* Normal Login Button */}
        <button type="submit">Login</button>
        
        {/* Divider */}
        <div className="login-divider">or</div>
        
        {/* Google Login */}
        <button type="button" className="google-login" onClick={handleGoogleLogin}>
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;

