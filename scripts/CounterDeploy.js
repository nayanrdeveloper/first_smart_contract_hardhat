const hre = require('hardhat');

async function main(){
    const Counter = await hre.ethers.getContractFactory('Counter');
    const counter = await Counter.deploy('Nayan',3);
    await counter.deployed();

    console.log(`Contract are deployed in ${counter.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});