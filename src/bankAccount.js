const Transaction = require("./transaction");

class BankAccount {
  constructor(date = new Date()) {
    this.accountBalance = 0;
    this.accountStatement = [];
    this.date = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  }

  printBalance() {
    return this.accountBalance;
  }

  printStatement() {
    console.log("date || credit || debit || balance");

    this.accountStatement.forEach((element) => {
      const credit = element.credit !== null ? element.credit : "";
      const debit = element.debit !== null ? element.debit : "";
      console.log(
        `${element.date} || ${credit} || ${debit} || ${element.balance}`
      );
    });
  }

  deposit(amount) {
    const transaction = new Transaction(
      this.date,
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
      this.date,
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
