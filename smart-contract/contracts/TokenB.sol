// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

/// @title TokenB contract
/// @author Ezequiel

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenB is ERC20, Ownable {
    constructor()
        ERC20("TokenB", "TkB")
        Ownable(msg.sender)
    {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }
}

