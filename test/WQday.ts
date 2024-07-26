import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("WQday", function () {
  async function deployWQDayFixture() {
    const NAME = "wqday"
    const SYMBOL = "wqday"

    const [owner] = await hre.ethers.getSigners();
    const fac = await hre.ethers.getContractFactory("WQday");
    const wqday = await fac.deploy(NAME, SYMBOL);

    return { wqday, owner };
  }

  describe("Deposit", function () {
    it("Should deposit success", async function () {
      const { wqday, owner } = await loadFixture(deployWQDayFixture);
      await wqday.deposit({ value: 1000 });
      expect(await wqday.balanceOf(owner.address)).to.equal(1000);
    });
  });
});
