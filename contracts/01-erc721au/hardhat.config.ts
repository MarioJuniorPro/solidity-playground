import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-test-utils";
import "hardhat-tracer";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-awesome-cli";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
      // outputSelection: {
      //   '*': {
      //     '*': ['storageLayout'],
      //   },
      // },
      outputSelection: {
        "*": {
          "*": ["storageLayout", "evm.bytecode", "evm.deployedBytecode", "devdoc", "userdoc", "metadata", "abi"],
        },
      },
    },
  },
  networks: {
    hardhat: {
      mining: {
        auto: true,
        interval: 3000,
      },
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
      gasPrice: 2000000000,
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API || "",
    showTimeSpent: true,
    showMethodSig: true,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  // gasReporter: {
  //   enabled: process.env.REPORT_GAS !== undefined,
  //   currency: 'USD',
  //   coinmarketcap: process.env.COINMARKETCAP_API || '',
  //   showTimeSpent: true,
  //   showMethodSig: true,
  // },
  // watcher: {
  //   compile: {
  //     tasks: ['compile'],
  //   },
  //   test: {
  //     tasks: [{ command: 'test', params: { testFiles: ['{path}'] } }],
  //     files: ['./test/**/*'],
  //     verbose: true,
  //   },
  // },
  mocha: {
    fullTrace: true,
    timeout: 0,
    bail: true,
    diff: true,
    checkLeaks: true,
  },
};

export default config;
