const hre = require("hardhat");
const { ethers } = require("ethers");

const tokens = (nToken) => {
  return ethers.utils.parseUnits(nToken.toString(), "ether");
};

async function main() {
  //DEPLOY TOKEN CONTRACT
  const _initialSupply = tokens(50000000);

  const CryptoFox = await hre.ethers.getContractFactory("CryptoFox");

  const cryptoFox = await CryptoFox.deploy(_initialSupply);

  await cryptoFox.deployed();
  console.log(`Deploying contract address: ${cryptoFox.address}`);

  const _tokenPrice = tokens(1);
  const TokenSale = await hre.ethers.getContractFactory("TokenSale");
  const tokenSale = await TokenSale.deploy(
    cryptoFox.address,
    _tokenPrice
  );

  await tokenSale.deployed();
  console.log(`TokenSale: ${tokenSale.address}`);
}

main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
})
