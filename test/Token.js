
/**
 * Tests based on Hardhat
 * 
 * https://hardhat.org/tutorial/testing-contracts
 */

const { BigNumber, ethers } = require("hardhat");
const { expect } = require("chai");

describe("Token contract", function () {
  
    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const expectedSupply = ethers.utils.parseUnits("370000000", 18);
        const [owner] = await ethers.getSigners();
        const DAMEXToken = await ethers.getContractFactory("DAMEXToken");
        const hardhatToken = await DAMEXToken.deploy();
        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        
        expect(await hardhatToken.totalSupply()).to.equal(expectedSupply);
        expect(await ownerBalance).to.equal(expectedSupply);        
    });


    it("Owner can update the metadata", async function () {
        const DAMEXToken = await ethers.getContractFactory("DAMEXToken");
        const hardhatToken = await DAMEXToken.deploy();
        
        await hardhatToken.updateMetadata("foo", "bar");
        
        expect(await hardhatToken.name()).to.equal("foo");
        expect(await hardhatToken.symbol()).to.equal("bar");
    });    


    it("Others cannot update the metadata", async function () {
        const [owner, user1] = await ethers.getSigners();
        const DAMEXToken = await ethers.getContractFactory("DAMEXToken");
        const hardhatToken = await DAMEXToken.deploy();
        
        await expect(
            hardhatToken.connect(user1).updateMetadata("foo", "bar")
          ).to.be.revertedWith("Ownable: caller is not the owner");
    });    


    it("Burns", async function () {
        const [owner, user1] = await ethers.getSigners();
        const DAMEXToken = await ethers.getContractFactory("DAMEXToken");
        const hardhatToken = await DAMEXToken.deploy();
  
        const burnedSupply = ethers.utils.parseUnits("369999999", 18);
        const burnedAmount = ethers.utils.parseUnits("1", 18);

        await hardhatToken.burn(burnedAmount);

        expect(await hardhatToken.totalSupply()).to.equal(burnedSupply);
    });
});
