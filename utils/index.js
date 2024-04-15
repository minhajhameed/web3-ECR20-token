import { ethers } from "ethers";
import Web3Modal from "web3modal";

import {
  TOKEN_ABI,
  TOKEN_ADDRESS,
  TOKEN_SALE_ABI,
  TOKEN_SALE_ADDRESS,
} from "../Context/constants.js";

export const walletConnectionCheck = async () => {
  try {
    if (!window.ethereum) return console.log("install Metamask");

    const account = await ethereum.request({ method: 'eth_accounts'});

    const firstAccount = account[0];

    return firstAccount;
  } catch (error) {
    console.error(error);
  }
};

export const connectWallet = async () => {
  try {
    if (!window.ethereum) return console.log("install Metamask");

    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const firstAccount = account[0];
    window.location.reload();

    return firstAccount;
  } catch (error) {
    console.error(error);
  }
};

const fetchTokenContract = (signerOrProvider) =>
  new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, signerOrProvider);

export const connectTokenContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchTokenContract(signer);

    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const getBalance = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    return await signer.getBalance();
  } catch (error) {
    console.log(error);
  }
};


const fetchTokenSaleContract = (signerOrProvider) =>
  new ethers.Contract(TOKEN_SALE_ADDRESS, TOKEN_SALE_ABI, signerOrProvider);

export const connectTokenSaleContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchTokenSaleContract(signer);

    return contract;
  } catch (error) {
    console.log(error);
  }
};