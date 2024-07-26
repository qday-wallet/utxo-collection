import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


//WQdayModule#WQday - 0xc7090F5ACEdf4ea5334D27E1C267816cb729091A
const WQdayModule = buildModule("WQdayModule", (m) => {
  const name = "pqusd"
  const symbol = "pqusd"
  const wqday = m.contract("WQday", [name, symbol]);
  return { wqday };
});

export default WQdayModule;
