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
}

module.exports = BankAccount;
