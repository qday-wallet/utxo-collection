import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// UTXOModule#UTXO - 0x626a3CC22Ee0d1A34C360C11b010ac0ff2a2cD9D
const UTXOModule = buildModule("UTXOModule", (m) => {
    const utxo = m.contract("UTXO");
    return { utxo };
});

export default UTXOModule;
