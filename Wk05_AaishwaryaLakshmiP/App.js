import React, { Component } from 'react';
import AppLayout from './AppLayout';
import Body from './Body';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <AppLayout>
      <Header /> 
      <Body />
      </AppLayout>
    );
  }
}

export default App;
