// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


/**
 * Hugs token core.
 *
 * - Supports burning
 * - Supports metadata updating
 */
contract HugsToken is Ownable, ERC20, ERC20Burnable {

    event MetadataUpdated(string name, string symbol);
    
    constructor() ERC20("Hugs Token", "HUGS") {
        _mint(msg.sender, 100_000_000 ether);
    }

    /**
     * Allow update the token metadata with any name or symbol changes.
     *
     */
    function updateMetadata(string calldata name, string calldata symbol) public onlyOwner {
        _name = name;
        _symbol = symbol;

        emit MetadataUpdated(name, symbol);
    }
}
