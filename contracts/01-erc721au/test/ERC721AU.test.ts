import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { ERC721AU } from "../typechain-types";

let contract: ERC721AU;
let deployer: SignerWithAddress;

describe("ERC721AU", function () {
  beforeEach(async function () {
    [deployer] = await ethers.getSigners();

    const contractFactory = await ethers.getContractFactory("ERC721AU", deployer);
    contract = await contractFactory.deploy();
    await contract.deployed();
    await contract.initialize("Azuki", "AZUKI");
  });

  it("Should return the name of the token", async function () {
    expect(await contract.name()).to.equal("Azuki");
  });

  it("Should return the symbol of the token", async function () {
    expect(await contract.symbol()).to.equal("AZUKI");
  });
});
