const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

task("Accounts","Get All Accounts Details", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts){
    const address = await account.getAddress();
    const balance = await hre.ethers.utils.formatEther(await account.getBalance());
    const gasFees = await account.address;
    console.log(`address: ${address} balance : ${balance} gasFees : ${gasFees}`);
  }
})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten:{
      url: process.env.ROPSTEN_URL,
      accounts: [process.env.ROPSTEN_PRIVATE_KEY]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
