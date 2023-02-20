const Transaction = require("./transaction");

class BankAccount {
  constructor() {
    this.accountBalance = 0;
    this.accountStatement = [];
  }

  printBalance() {
    return this.accountBalance;
  }

  printStatement() {
    return this.accountStatement;
  }

  deposit(amount) {
    const transaction = new Transaction(
      Date.now(),
      null,
      amount,
      (this.accountBalance += amount)
    );
    amount === 0
      ? console.error("Please deposit an amount above zero")
      : this.accountStatement.push(transaction);
  }

  withdraw(amount) {
    const transaction = new Transaction(
      Date.now(),
      amount,
      null,
      (this.accountBalance -= amount)
    );
    this.accountStatement.push(transaction);
  }
}

module.exports = BankAccount;
