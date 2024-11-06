import React from 'react';

const Download = () => {
  const handleRedirect = () => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={handleRedirect}
        style={{
          fontSize: '24px',
          padding: '20px 40px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      >
        Download
      </button>
    </div>
  );
};

export default Download;
