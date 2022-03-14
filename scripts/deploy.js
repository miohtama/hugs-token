 // scripts/GLDToken_deploy.js

 const hre = require("hardhat");

 async function main() {

   const DAMEXToken = await hre.ethers.getContractFactory("DAMEXToken");
   console.log('Deploying token...');
   const token = await DAMEXToken.deploy();

   await token.deployed();
   console.log("DAMEXToken deployed to:", token.address);
 }

 main()
   .then(() => process.exit(0))
   .catch((error) => {
     console.error(error);
     process.exit(1);
   });
