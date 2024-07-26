// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
pragma abicoder v2;

contract UTXO {
    struct UTXOEntry {
        uint256 blockNumber;
        bytes encryptedData; // UTXO transaction encrypted data
    }

    /// @notice Emitted when a UTXO is recorded.
    /// @param utxoId The ID of the UTXO.
    /// @param blockNumber The block number of the UTXO.
    /// @param encryptedData The encrypted data of the UTXO.
    event UTXORecorded(
        uint256 indexed utxoId,
        uint256 blockNumber,
        bytes encryptedData
    );

    /// @notice Mapping from UTXO ID to UTXO entry
    mapping(uint256 => UTXOEntry) private _utxos;

    uint256 private _nextUtxoId;

    /// @notice Record a UTXO.
    /// @param encryptedData The encrypted data of the UTXO.
    function recordUTXO(bytes calldata encryptedData) external {
        uint256 utxoId = _nextUtxoId++;

        _utxos[utxoId] = UTXOEntry({
            blockNumber: block.number,
            encryptedData: encryptedData
        });

        emit UTXORecorded(utxoId, block.number, encryptedData);
    }

    /// @notice Get a UTXO.
    /// @param utxoId The ID of the UTXO.
    function getUTXO(
        uint256 utxoId
    ) external view returns (uint256 blockNumber, bytes memory encryptedData) {
        UTXOEntry memory utxo = _utxos[utxoId];
        return (utxo.blockNumber, utxo.encryptedData);
    }
}
