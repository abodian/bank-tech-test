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
    this.accountStatement.push(transaction);
  }
}

module.exports = BankAccount;
