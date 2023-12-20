// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract TRX is ERC20, ERC20Burnable {
    constructor() ERC20("TRON", "TRX") {
        _mint(msg.sender, 100_000_000_000 * 10 ** 6 );
    }

    function decimals() public view virtual override returns (uint8) {
        return 6;
    }
}