const Transaction = require("./transaction");

class BankAccount {
  constructor() {
    this.accountBalance = 0;
    this.accountStatement = [["date || credit || debit || balance"]];
  }

  printBalance() {
    return this.accountBalance;
  }

  printStatement() {
    this.accountStatement.forEach((element) => {
      console.log(element.join(","));
    });
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
    amount > this.accountBalance
      ? console.error("Funds not available, please try a lower amount")
      : this.accountStatement.push(transaction);
  }
}

module.exports = BankAccount;
