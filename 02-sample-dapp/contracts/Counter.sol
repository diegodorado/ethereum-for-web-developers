// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;

contract Counter {
    uint256 public value;

    event Increased(uint256 newValue);

    function increase() public {
        value = value + 1;
        emit Increased(value);
    }
}
