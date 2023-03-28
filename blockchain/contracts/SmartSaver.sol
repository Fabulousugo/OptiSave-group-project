//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract SmartSaver {
    // Map the balances of users to their addresses
    mapping(address => uint) balances;

    // Define the events emitted by the contract
    event Deposit(address indexed user, uint amount);
    event Withdrawal(address indexed user, uint amount);

    // Function to allow users to deposit funds into their account
    function deposit() public payable {
        // Deposit amount must be greater than zero
        require(msg.value > 0, "Deposit amount must be greater than zero");

        // Deposit amount cannot be greater than 1000 ether
        require(msg.value <= 1000 ether, "Deposit amount cannot be greater than 1 ether");

        // Add deposit amount to user's balance and emit Deposit event
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    // Function to allow users to withdraw funds from their account
    function withdraw(uint amount) public {
        // User must have sufficient balance
        require(balances[msg.sender] >= amount, "Insufficient balance");

        // Withdrawal amount must be greater than zero
        require(amount > 0, "Withdrawal amount must be greater than zero");

        // Withdrawal amount cannot be greater than 1 ether
        require(amount <= 1 ether, "Withdrawal amount cannot be greater than 100 ether");

        // Calculate 1% fee on withdrawal amount
        uint fee = amount / 100;

        // Calculate net withdrawal amount (after deducting fee)
        uint netAmount = amount - fee;

        // Check if net withdrawal amount plus fee exceeds user's balance
        require(netAmount <= balances[msg.sender], "Withdrawal amount plus fee exceeds balance");

        // Deduct net withdrawal amount plus fee from user's balance
        balances[msg.sender] -= netAmount;

        // Transfer net withdrawal amount to user's account and emit Withdrawal event
        (bool success, ) = payable(msg.sender).call{value: netAmount, gas: 2300}("");
        require(success, "Transfer failed.");
        emit Withdrawal(msg.sender, netAmount);
    }

    // Function to allow users to check their account balance
    function getBalance() public view returns (uint) {
        return balances[msg.sender];
    }
}
