import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';


dotenv.config();
const privateKey = process.env.PRIVATE_KEY;
if (!privateKey) {
  throw new Error("PRIVATE_KEY is not set");
}

const config: HardhatUserConfig = {
  ignition: {
    requiredConfirmations: 1,
  },
  solidity: "0.8.24",
  networks: {
    qday: {
      url: "https://devnet-rpc.qday.ninja",
      accounts: [privateKey || ""],
      chainId: 1001,
    },
  },
};

export default config;
