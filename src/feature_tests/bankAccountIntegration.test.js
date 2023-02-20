const BankAccount = require("../bankAccount");
const Transaction = require("../transaction");
const consoleSpy = jest.spyOn(console, "log");

describe("integration test of BankAccount and Transaction", () => {
  let bankAccount;
  let transaction;
  beforeEach(() => {
    bankAccount = new BankAccount();
    transaction = new Transaction();
    consoleSpy.mockClear();
    bankAccount.accountBalance = 0;
  });
  it("deposits, withdraws and prints statement", () => {
    bankAccount.deposit(100, "01/01/2022");
    bankAccount.withdraw(50, "01/01/2022");

    bankAccount.printStatement();
    expect(consoleSpy).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "01/01/2022 ||  || 100.00 || 100.00"
    );
    expect(consoleSpy).toHaveBeenCalledWith("01/01/2022 || 50.00 ||  || 50.00");
  });
});
