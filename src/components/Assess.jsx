import React from 'react';
import { Link } from 'react-router-dom';

export default function Assess() {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    margin: '2rem auto',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#0074D9',
    fontWeight: 'bold',
    margin: '0.5rem',
    display: 'block',
  };

  return (
    <div style={containerStyle}>
      <h1>Assessments</h1>
      <div>
        <Link to="/assessment/react" style={linkStyle}>
          React JS
        </Link>
      </div>
      <div>
        <Link to="/assessment/jsquizz" style={linkStyle}>
          JavaScript
        </Link>
      </div>
    </div>
  );
}
