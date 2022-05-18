import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { ERC721AU } from "../typechain-types";

let contract: ERC721AU;
let deployer: SignerWithAddress;

describe("MockERC721UpgradeableUpgradeable", function () {
  beforeEach(async function () {
    [deployer] = await ethers.getSigners();

    const MockERC721Upgradeable = await ethers.getContractFactory("ERC721AU", deployer);
    contract = await MockERC721Upgradeable.deploy();
    await contract.deployed();
    await contract.initialize("MockERC721Upgradeable", "MOCK");
  });

  it("Should return the name of the token", async function () {
    expect(await contract.name()).to.equal("MockERC721Upgradeable");
  });

  it("Should return the symbol of the token", async function () {
    expect(await contract.symbol()).to.equal("MOCK");
  });
});
