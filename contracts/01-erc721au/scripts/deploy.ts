import { addressBook, ethers, upgrades, network } from "hardhat";
import { ERC721AU } from "../typechain-types";

async function main() {
  const [deployer] = await ethers.getSigners();

  const CONTRACT_NAME = "ERC721AU" as const;
  const NAME = "Azuki" as const;
  const SYMBOL = "AZUKI" as const;
  const ContractFactory = await ethers.getContractFactory(CONTRACT_NAME, deployer);
  const contract = (await upgrades.deployProxy(ContractFactory, [NAME, SYMBOL], {})) as ERC721AU;

  await contract.deployed();
  await addressBook.saveContract(CONTRACT_NAME, contract.address, network.name, deployer.address);

  console.log(`${CONTRACT_NAME} deployed to:`, contract.address);
  console.log("Total supply:", await contract.totalSupply());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
