import React from 'react';

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        src="/logo.png"
        alt="Tadbeer Transformation"
        className="main-logo"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </div>
  );
};

export default Logo;