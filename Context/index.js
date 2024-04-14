"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import { ethers } from "ethers";

import {
  walletConnectionCheck,
  connectWallet,
  connectTokenContract,
  getBalance,
  connectTokenSaleContract,
} from "/utils/index";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const TOKEN_ICO = "TOKEN SALE DAPP";

  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [nativeToken, setNativeToken] = useState("");
  const [tokenHolder, setTokenHolder] = useState([]);
  const [tokenSale, setTokenSale] = useState("");
  const [currentHolder, setCurrentHolder] = useState("");

  // FETCH CONTRACT DATA
  const fetchInitialData = async () => {
    try {
      const account = await walletConnectionCheck();
      const balance = await getBalance();
      setBalance(ethers.utils.formatEther(balance.toString()));
      setAddress(account);

      const connectedTokenContract = await connectTokenContract();

      let tokenBalance;
      if (account) {
        tokenBalance = await connectedTokenContract.balanceOf(account);
      } else {
        tokenBalance = 500;
      }

      console.log(tokenBalance.toString());

      const tokenName = await connectedTokenContract.name();
      const tokenSymbol = await connectedTokenContract.symbol();
      const tokenTotalSupply = await connectedTokenContract.totalSupply();
      const tokenStandard = await connectedTokenContract.standard();
      const tokenHolders = await connectedTokenContract._userId();
      const tokenContractOwner = await connectedTokenContract.contractOwner();
      const tokenAddress = await connectedTokenContract.address;

      const nativeToken = {
        tokenAddress: tokenAddress,
        tokenName: tokenName,
        tokenSymbol: tokenSymbol,
        tokenContractOwner: tokenContractOwner,
        tokenStandard: tokenStandard,
        tokenTotalSupply: ethers.utils.formatEther(tokenTotalSupply.toString()),
        tokenBalance: ethers.utils.formatEther(tokenBalance.toString()),
        tokenHolders: tokenHolders.toNumber(),
      };

      setNativeToken(nativeToken);
      // console.log(nativeToken);

      const getTokenHolder = await connectedTokenContract.getTokenHolder();
      setTokenHolder(getTokenHolder);

      if (account) {
        const getTokenHolderData =
          await connectedTokenContract.getTokenHolderData(account);

        const currentHolder = {
          tokenId: getTokenHolderData[0].toNumber(),
          from: getTokenHolderData[1],
          to: getTokenHolderData[2],
          totalToken: ethers.utils.formatEther(
            getTokenHolderData[3].toString()
          ),
          tokenHolder: getTokenHolderData[4],
        };

        setCurrentHolder(currentHolder);
      }

      const connectedTokenSaleContract = await connectTokenSaleContract();
      const tokenPrice = await connectedTokenSaleContract.tokenPrice();
      const tokenSold = await connectedTokenSaleContract.tokenSold();
      const tokenSaleBalance = await connectedTokenContract.balanceOf(
        "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
      );

      const tokenSale = {
        tokenPrice: ethers.utils.formatEther(tokenPrice.toString()),
        tokenSold: tokenSold.toNumber(),
        tokenSaleBalance: ethers.utils.formatEther(tokenSaleBalance.toString()),
      };

      setTokenSale(tokenSale);
      console.log(account);
      console.log(tokenSale);
      console.log(currentHolder);
      console.log(nativeToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const buyToken = async (nToken) => {
    try {
      const amount = ethers.utils.parseUnits(nToken.toString(), "ether");
      const contract = await connectTokenSaleContract();

      const buying = await contract.buyToken(nToken, {
        value: amount.toString(),
      });
      await buying.wait();
      console.log(buying);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const transferNativeToken = async () => {
    try {
      const TOKEN_SALE_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      const TOKEN_AMOUNT = 500;
      const tokens = TOKEN_AMOUNT.toString();
      const transferAmount = ethers.utils.parseEther(tokens);

      const contract = await connectTokenContract();
      const transaction = await contract.transfer(
        TOKEN_SALE_ADDRESS,
        transferAmount,
        { gasLimit: 300000 }
      );

      console.log(contract);
      await transaction.wait();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StateContext.Provider
      value={{
        transferNativeToken,
        buyToken,
        connectWallet,
        setAddress,
        TOKEN_ICO,
        currentHolder,
        tokenSale,
        tokenHolder,
        nativeToken,
        balance,
        address,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
};
