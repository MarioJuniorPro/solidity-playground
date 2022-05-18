import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractAt("ERC721AU", "0x0b9825D065745D3D9E0C1917280249C485496bC7");

  await contract.mint(5);

  console.log("ERC721AU at:", contract.address);
  console.log("Total supply:", await contract.totalSupply());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
