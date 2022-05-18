import { ethers, upgrades } from "hardhat";
import { ERC721AU } from "../typechain-types";

async function main() {
  const NAME = "Azuki" as const;
  const SYMBOL = "AZUKI" as const;
  const ContractFactory = await ethers.getContractFactory("ERC721AU");
  const contract = (await upgrades.deployProxy(ContractFactory, [NAME, SYMBOL], {})) as ERC721AU;

  await contract.deployed();

  console.log("ERC721AU deployed to:", contract.address);
  console.log("Total supply:", await contract.totalSupply());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
