// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract CryptoFox {
    string public name = "Crypto Fox";
    string public symbol = "CFT";
    string public standard = "@foxcrypto v.0.7";
    uint256 public totalSupply;
    address public contractOwner;
    uint256 public _userId;

    address[] public holderToken;

    event Transfer(address indexed _from, address indexed _to, uint256 indexed _value);

    event Approval (
        address indexed _owner,
        address indexed _spender,
        uint256 indexed _value
    );

    mapping(address => TokenHolderInfo) public tokenHolderInfos;

    struct TokenHolderInfo {
        uint256 _tokenId;
        address _from;
        address _to;
        uint256 _totalToken;
        bool _tokenHolder;
    }

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor(uint256  _initialSupply) {
        contractOwner = msg.sender;
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }

    function inc() internal {
        _userId++;
    }

    function transfer(address _to, uint256  _value) public returns(bool success) {
        require(balanceOf[msg.sender]>= _value);
        inc();

        balanceOf[msg.sender] -= _value;      
        balanceOf[_to] += _value;

        TokenHolderInfo storage tokenHolderInfo = tokenHolderInfos[_to];

        tokenHolderInfo._to = _to;   
        tokenHolderInfo._from = msg.sender;   
        tokenHolderInfo._tokenHolder = true;
        tokenHolderInfo._totalToken = _value;
        tokenHolderInfo._tokenId = _userId;

        holderToken.push(_to);

        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns(bool success) {
        require(_value <= balanceOf[_from]);
        require(_value <= allowance[_from][msg.sender]);

        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;

        allowance[_from][msg.sender] -= _value;

        emit Transfer(_from, _to, _value);

        return true;
    }

    function getTokenHolderData(address _address) public view returns( uint256, address, address, uint256, bool ) {
        return(
            tokenHolderInfos[_address]._tokenId,
            tokenHolderInfos[_address]._to,
            tokenHolderInfos[_address]._from,
            tokenHolderInfos[_address]._totalToken,
            tokenHolderInfos[_address]._tokenHolder
        );
    }

    function getTokenHolder() public view returns(address[] memory) {
        return holderToken;
    }
}