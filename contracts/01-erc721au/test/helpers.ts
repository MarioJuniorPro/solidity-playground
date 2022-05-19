import { Contract, ContractFactory } from "ethers";

import { ethers } from "hardhat";

export const deployContract = async function <T extends Contract = Contract>(
  contractName: string,
  constructorArgs: any,
): Promise<T> {
  let factory;
  try {
    factory = await ethers.getContractFactory(contractName);
  } catch (e) {
    factory = await ethers.getContractFactory(contractName + "UpgradeableWithInit");
  }
  const contract = await factory.deploy(...(constructorArgs || []));
  await contract.deployed();
  return contract as unknown as T;
};

export const deployContractUpgradable = async function <T extends Contract = Contract>(
  contractName: string,
  constructorArgs: any,
): Promise<T> {
  const factory = await getFactory(contractName);
  const contract = await factory.deploy();
  await contract.deployed();
  await contract.initialize(...(constructorArgs || []));
  return contract as unknown as T;
};

export const getFactory = async function <T extends ContractFactory = ContractFactory>(
  contractName: string,
): Promise<T> {
  let factory: any;
  try {
    factory = await ethers.getContractFactory(contractName);
  } catch (e) {
    factory = await ethers.getContractFactory(contractName + "UpgradeableWithInit");
  }
  return factory as T;
};
