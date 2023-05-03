 // scripts/GLDToken_deploy.js

 const hre = require("hardhat");

 async function main() {

   const HugsToken = await hre.ethers.getContractFactory("HugsToken");
   console.log('Deploying token...');
   const token = await HugsToken.deploy();

   await token.deployed();
   console.log("HugsToken deployed to:", token.address);
 }

 main()
   .then(() => process.exit(0))
   .catch((error) => {
     console.error(error);
     process.exit(1);
   });
