import { ethers } from "hardhat";
import { ERC721AU } from "../typechain-types";
import { deployContractUpgradable } from "./helpers";

describe("ERC721AUGasReporter Gas Usage", function () {
  let erc721a: ERC721AU;

  beforeEach(async function () {
    erc721a = await deployContractUpgradable("ERC721AUGasReporter", ["Azuki", "AZUKI"]);
    this.erc721a = erc721a;
    const [owner, addr1] = await ethers.getSigners();
    this.owner = owner;
    this.addr1 = addr1;
  });

  context("mintOne", function () {
    it("runs mintOne 50 times", async function () {
      for (let i = 0; i < 50; i++) {
        await this.erc721a.mintOne(this.addr1.address);
      }
    });
  });

  context("safeMintOne", function () {
    it("runs safeMintOne 50 times", async function () {
      for (let i = 0; i < 50; i++) {
        await this.erc721a.safeMintOne(this.addr1.address);
      }
    });
  });

  context("mintTen", function () {
    it("runs mintTen 50 times", async function () {
      for (let i = 0; i < 50; i++) {
        await this.erc721a.mintTen(this.addr1.address);
      }
    });
  });

  context("safeMintTen", function () {
    it("runs safeMintTen 50 times", async function () {
      for (let i = 0; i < 50; i++) {
        await this.erc721a.safeMintTen(this.addr1.address);
      }
    });
  });

  context("mintOneHundred", function () {
    it("runs mintOneHundred 50 times", async function () {
      for (let i = 0; i < 50; i++) {
        await this.erc721a.mintOneHundred(this.addr1.address);
      }
    });
  });

  context("safeMintOneHundred", function () {
    it("runs safeMintOneHundred 50 times", async function () {
      for (let i = 0; i < 50; i++) {
        await this.erc721a.safeMintOneHundred(this.addr1.address);
      }
    });
  });

  context("transferFrom", function () {
    it("transfer to and from two addresses", async function () {
      await this.erc721a.mintTen(this.addr1.address);
      await this.erc721a.mintTen(this.owner.address);
      for (let i = 0; i < 10; ++i) {
        await this.erc721a.connect(this.addr1).transferFrom(this.addr1.address, this.owner.address, 1);
        await this.erc721a.connect(this.owner).transferFrom(this.owner.address, this.addr1.address, 1);
      }
    });
  });
});
