// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract WQday is ERC20 {
    /// @notice The amount of QDay to deposit.
    /// @param amount The amount of QDay to deposit.
    event Deposit(address indexed dst, uint amount);

    address public owner;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        owner = msg.sender;
        _mint(msg.sender, 200000000000000000000000000);
    }

    receive() external payable {}

    /// @notice The amount of QDay to deposit.
    function deposit() external payable {
        require(msg.value > 0, "WQday: deposit amount must be greater than 0");
        _mint(msg.sender, msg.value);
        emit Deposit(msg.sender, msg.value);
    }

    /// @notice Modifier to check if the caller is the owner
    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "WQday: Only the owner can call this function"
        );
        _;
    }

    /// @notice Allows the owner to mint tokens for anybody
    /// @param amount The amount of tokens to mint
    function mint(address recipient,uint amount) external onlyOwner {
        _mint(recipient, amount);
    }
}
