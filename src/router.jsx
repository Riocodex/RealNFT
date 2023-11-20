import React, { useState, useEffect } from "react";
import AboutUs from "./pages/AboutUs";
import Faqs from "./pages/Faqs";
import UploadWork from "./pages/UploadWork";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateProfile from "./pages/CreatorProfile";
import Wallet from "./pages/Walllet";
import ItemDetailOne from "./pages/ItemDetailOne";
import DarkVersionThree from "./pages/DarkVersionThree";
import CreatorProfileEdit from "./pages/CreatorProfileEdit";
import Navbar from "./components/Navbar";
import nftData from "./utils/Nft.json";
import marketplaceData from "./utils/Marketplace.json";
import { ethers } from "ethers";
import ItemContextProvider from "./contexts/ItemContext";

export default function Router() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [contractHello, setContractHello] = useState("");
  const [marketplace, setMarketplace] = useState({});
  const [nft, setNft] = useState({});
  //contract variables
  const nftAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const nftABI = nftData.abi;
  const marketplaceAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const marketplaceABI = marketplaceData.abi;

  // Wallet connection logic
  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log("accounts: ", accounts);

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log("wallet is connected! " + account);
      } else {
        console.log("make sure MetaMask is connected");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("please install MetaMask");
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const getHelloTx = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const nft = new ethers.Contract(nftAddress, nftABI, signer);
        setNft(nft);
        const marketplace = new ethers.Contract(
          marketplaceAddress,
          marketplaceABI,
          signer
        );
        setMarketplace(marketplace);

        const hello = await marketplace.getString();
        console.log(hello);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("from router. ", marketplace);

  useEffect(() => {
    getHelloTx();

    isWalletConnected();
  }, []);
  return (
    <ItemContextProvider>
      <BrowserRouter>
        <Navbar web3Handler={connectWallet} account={currentAccount} />

        <Routes>
         

   
          {/* template page routes  */}
          <Route exact path="/aboutus" element={<AboutUs />} />        
          <Route
            exact
            path="/upload-work"
            element={<UploadWork marketplace={marketplace} nft={nft} />}
          />
          <Route
            exact
            path="/creator-profile"
            element={<CreateProfile currentAccount={currentAccount} />}
          />
          <Route
            exact
            path="/creator-profile-edit"
            element={<CreatorProfileEdit />}
          />
          <Route exact path="/wallet" element={<Wallet />} />
          <Route exact path="/item/:id" element={<ItemDetailOne />} />
          
          <Route
            exact
            path="/"
            element={<DarkVersionThree marketplace={marketplace} nft={nft} />}
          />

        
        </Routes>
      </BrowserRouter>
    </ItemContextProvider>
  );
}
