import React from 'react';
import './App.css';

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      {children}
    </div>
  );
};

export default AppLayout;
