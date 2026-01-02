import React from 'react';

function App() {
  return (
    <div style={{
      background: 'linear-gradient(45deg, #0f0c29, #302b63, #24243e)',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding: '50px',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem' }}>Glassmorphism Live</h1>
        <p style={{ opacity: 0.8 }}>Your React project is successfully deployed!</p>
      </div>
    </div>
  );
}

export default App;