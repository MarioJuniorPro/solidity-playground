// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./ERC721AU.sol";

contract ERC721AUGasReporter is ERC721AU {
    function __ERC721AUGasReporter_init(string memory name_, string memory symbol_) internal onlyInitializing {
        __ERC721A_init_unchained(name_, symbol_);
    }

    function __ERC721AGasReporterMock_init_unchained(string memory, string memory) internal onlyInitializing {}

    function safeMintOne(address to) public {
        _safeMint(to, 1);
    }

    function mintOne(address to) public {
        _mint(to, 1);
    }

    function safeMintTen(address to) public {
        _safeMint(to, 10);
    }

    function mintTen(address to) public {
        _mint(to, 10);
    }


    function safeMintOneHundred(address to) public {
        _safeMint(to, 100);
    }

    function mintOneHundred(address to) public {
        _mint(to, 100);
    }

    /**
     * @dev This empty reserved space is put in place to allow future versions to add new
     * variables without shifting down storage in the inheritance chain.
     * See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps
     */
    uint256[50] private __gap;
}
