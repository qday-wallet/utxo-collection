import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


//WQdayModule#WQday - 0x039198230f586B5c510733753E14C996735Ea85d
const WQdayModule = buildModule("WQdayModule", (m) => {
  const name = "pqusd"
  const symbol = "pqusd"
  const wqday = m.contract("WQday", [name, symbol]);
  return { wqday };
});

export default WQdayModule;
