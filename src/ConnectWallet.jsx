import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Alert } from '@mui/material';


const ConnectWallet = () => {

    let accounts = null;

    const [connect, setConnect] = useState(
        { state: "error", message: "Please connect wallet.", account: null },);
    
    const handleClick = () => {
    setConnect({ state: "success", message: "Connected wallet.", account: accounts[0] },);
    }

    const connecting = async () => {
        if (typeof window.ethereum != undefined) {
            try {
                accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                await window.ethereum.request({ 
                    method: 'wallet_switchEthereumChain', 
                    params: [{ chainId: '0x5' }],
                });
                handleClick();
            } catch (error) {
                alert('トランザクションが拒否されました。');
            }
        } else {
            alert('MetaMaskが存在しません。');
        }
    };

  return (
    <>
        <p>{connect.account}</p>
        <Button id="button" variant="contained" color='inherit' onClick={connecting}>connect wallet</Button>
        <Alert id="alert" severity={connect.state}>{connect.message}</Alert>
    </>
  )
}

export default ConnectWallet
