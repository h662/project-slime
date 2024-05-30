// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SlimeProject is ERC721Enumerable, Ownable {
    mapping(uint => string) metadataURI;

    constructor() ERC721("Slime Project", "SP") Ownable(msg.sender) {}

    function mintNFT(string memory _metadataURI) public onlyOwner {
        uint256 tokenId = totalSupply() + 1;

        _mint(msg.sender, tokenId);

        metadataURI[tokenId] = _metadataURI;
    }

    function tokenURI(uint _tokenId) public view override returns  (string memory) {
        return metadataURI[_tokenId];
    } 
}