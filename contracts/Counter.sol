// SPDX-License-Identifier: Unlicensed

pragma solidity >=0.4.22 <0.9.0;
import "hardhat/console.sol";

contract Counter{
    string public name;
    uint public counter;

    constructor(string memory _name, uint _initialCount){
        name = _name;
        counter = _initialCount;
    }

    function increment() public returns (uint newCount) {
        counter ++;
        return counter;
    }

    function decrement() public returns (uint newCount) {
        counter --;
        return counter;
    }

    function getCount() public view returns(uint){
        return counter;
    }

    function getName() public view returns (string memory currentName){
        return name;
    }

    function setName(string memory _newName) public returns(string memory newName){
        console.log("Old name is %s and new Name is %s", name,_newName);
        name = _newName;
        return name;
    }
}