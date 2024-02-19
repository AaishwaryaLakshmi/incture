// App.js
import React from 'react';
import AppLayout from './AppLayout';
import Body from './Body';
import Header from './Header'; // Import the Header component

const App = () => {
  return (
    <AppLayout>
      <Header /> 
      <Body />
    </AppLayout>
  );
};

export default App;
