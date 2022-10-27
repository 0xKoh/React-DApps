import React from 'react';
import ConnectWallet from './ConnectWallet';
import { Paper } from '@mui/material';
import './App.css';

function App() {

  return (
    <div id="App">
      <Paper elevation={0}> 
      <h1>React DApps</h1>
      <ConnectWallet />
      </Paper>
    </div>
  );
}

export default App;
