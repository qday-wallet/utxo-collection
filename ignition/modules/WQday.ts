import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// WQdayModule#WQday - 0x579d2fF2339CefE5ea32C5Fc0aFC2e1463B7C6ef
const WQdayModule = buildModule("WQdayModule", (m) => {
  const name = "wqday"
  const symbol = "wqday"
  const wqday = m.contract("WQday", [name, symbol]);
  return { wqday };
});

export default WQdayModule;
