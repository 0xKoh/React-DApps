import React from 'react';
import { useState } from 'react';
import ConnectWallet from './ConnectWallet';
import css from './App.css';

function App() {

  return (
    <div id="App">
      <h1>React DApps</h1>
      <ConnectWallet />
    </div>
  );
}

export default App;
