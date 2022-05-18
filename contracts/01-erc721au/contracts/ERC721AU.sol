// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "erc721a-upgradeable/contracts/ERC721AUpgradeable.sol";

contract ERC721AU is ERC721AUpgradeable
{
    string internal baseURI;

    function initialize(string memory name_, string memory symbol_)
        public
        initializer
    {
        __ERC721A_init(name_, symbol_);
    }

    function mint(uint256 quantity) external payable {
        _mint(_msgSender(), quantity);
    }

    function safeMint(uint256 quantity) external payable {
        _safeMint(_msgSender(), quantity);
    }
    
    function currentIndex() public view returns (uint256) {
        return _currentIndex;
    }
    function startTokenId() public pure returns (uint256) {
        return _startTokenId();
    }

    function _startTokenId() internal pure override returns (uint256) {
        return 1;
    }

    function setBaseURI(string calldata uri) external {
        baseURI = uri;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function totalMinted() public view returns (uint256) {
        return _totalMinted();
    }

    function numberMinted(address _owner) public view returns (uint256) {
        return _numberMinted(_owner);
    }

    function numberBurned(address _owner) public view returns (uint256) {
        return _numberBurned(_owner);
    }

    function exists(uint256 _tokenId) public view returns (bool) {
        return _exists(_tokenId);
    }
}
