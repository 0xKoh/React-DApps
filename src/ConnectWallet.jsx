import React from 'react';
import { useState, useEffect } from 'react';

const ConnectWallet = () => {

    let accounts = null;

    const [connect, setConnect] = useState(
        { state: false, message: "Please connect wallet.", account: null },);
    
    const handleClick = () => {
    setConnect({ state: true, message: "Cennected wallet.", account: accounts[0] },);
    }

    useEffect(() => {
        console.log("Hello World");
    }, [connect]);

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
        <p>{connect.message}</p>
        <p>{connect.account}</p>
        <button onClick={connecting}>connect wallet</button>
    </>
  )
}

export default ConnectWallet
