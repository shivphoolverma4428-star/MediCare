import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic yahan aayega
    console.log("Logging in with:", { email, password });
  };

  return (
    <div style={{
      minHeight: '75vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8fafc',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
        padding: '32px',
        border: '1px solid #e2e8f0'
      }}>
        {/* Header Title */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#0f172a',
            margin: '0 0 8px 0'
          }}>
            Welcome Back
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#64748b',
            margin: 0
          }}>
            Please enter your credentials to access your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#334155',
              marginBottom: '6px'
            }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <label style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#334155'
              }}>
                Password
              </label>
              <a href="#forgot" style={{
                fontSize: '13px',
                color: '#0284c7',
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(2, 132, 199, 0.2)',
              transition: 'background-color 0.2s'
            }}
          >
            Sign In
          </button>
        </form>

        {/* Footer Link */}
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
            Don't have an account?{' '}
            <a href="#signup" style={{ color: '#0284c7', textDecoration: 'none', fontWeight: '600' }}>
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login