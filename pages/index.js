import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Web3 from 'web3';
import { web3Modal } from '../wallet_com/getProvider'
import Button from '@mui/material/Button';
import TimezoneSelect from "react-timezone-select"
import React, { useState } from "react"


import watchABI from "./watchABI.json"


export default function Home() {
  const [selectedTimezone, setSelectedTimezone] = useState({})

  async function mintNFT() {
    const provider = await web3Modal.connect()
    const web3 = new Web3(provider);
    const chainID = await web3.eth.net.getId();
    if (chainID === 137) {
      const returnValue = await web3.eth.getAccounts();
      const account = returnValue[0];
      const WatchInstance = new web3.eth.Contract(watchABI, "0xaC79D9B0A6C6d08ca6355DF7C6cB5D2609cE8450");
      await WatchInstance.methods.publicMint().send({ from: account });
    } else {
      alert("Please switch to the Polygon Mainnet")
    }
  }

  async function changeTimezone() {
    const provider = await web3Modal.connect()
    const web3 = new Web3(provider);
    const chainID = await web3.eth.net.getId();
    if (chainID === 137) {
      const returnValue = await web3.eth.getAccounts();
      const account = returnValue[0];
      const WatchInstance = new web3.eth.Contract(watchABI, "0xaC79D9B0A6C6d08ca6355DF7C6cB5D2609cE8450");
      const tokenID = parseInt(prompt("Which watch would you like to change the timezone of? Input your watch ID here."));
      if (tokenID) {
        await WatchInstance.methods.setTimezone(selectedTimezone.offset, tokenID).send({ from: account });
      }
    } else {
      alert("Please switch to the Polygon Mainnet")
    }
  }

  return (
    <div className={styles.container} style={{
      textAlign: "center",
    }}>
      <Head>
        <title>Mint your watch</title>
        <meta name="description" content="The watch is an NFT which always shows the correct time." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        Welcome to the watch NFT, mint here for free:
      </h1>
      <div style={{
        maxWidth: "50%",
        textAlign: "center",
        margin: "auto",
      }}>
        <div style={{
          marginTop: "20px",
          padding: "10px",
        }}>
          <Button onClick={mintNFT} variant="contained">Mint a watch</Button>
        </div>
        <div className='border border-primary'>
          <div style={{
            marginTop: "30px",
            padding: "20px",
          }}>
            <h2>Change your watches timezone:</h2>
            <TimezoneSelect
              value={selectedTimezone}
              onChange={setSelectedTimezone}
            />
          </div>
          <div style={{
            padding: "20px",
          }}>
            <Button onClick={changeTimezone} variant="contained">Change timezone</Button>
          </div>
        </div>

      </div>
    </div>
  )
}
