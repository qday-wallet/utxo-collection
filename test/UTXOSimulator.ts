import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre, { ethers } from "hardhat";

describe("UTXO", function () {
  async function deployUTXOFixture() {

    const [owner] = await hre.ethers.getSigners();
    const fac = await hre.ethers.getContractFactory("UTXO");
    const utxo = await fac.deploy();

    return { utxo, owner };
  }

  describe("Deposit", function () {
    it("Should record utxo", async function () {
      const { utxo } = await loadFixture(deployUTXOFixture);

      const encryptedData = ethers.toUtf8Bytes("utxo encrypted data")
      const tx = await utxo.recordUTXO(encryptedData);
      const receipt = await tx.wait();
      await expect(tx).to.emit(utxo, "UTXORecorded").withArgs(0, tx.blockNumber, encryptedData);

      const [blockNumber, storedEncryptedData] = await utxo.getUTXO(0);
      await expect(blockNumber).to.equal(receipt?.blockNumber);
      await expect(ethers.toUtf8String(encryptedData)).to.deep.equal(ethers.toUtf8String(storedEncryptedData));
    });
  });
});
