const BankAccount = require("./bankAccount");
const Transaction = require("./transaction");
jest.mock("./transaction");
console.error = jest.fn();
const consoleSpy = jest.spyOn(console, "log");

describe("BankAccount class", () => {
  let bankAccount;
  beforeEach(() => {
    Transaction.mockClear();
    console.error.mockClear();
    bankAccount.accountBalance = 0;
  });

  bankAccount = new BankAccount();

  it("returns balance of 0 when printBalance() called", () => {
    expect(bankAccount.printBalance()).toBe(0);
  });

  it("prints the first line of the statement column names", () => {
    bankAccount.printStatement();
    expect(consoleSpy).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
  });

  it("deposits 500 and prints balance", () => {
    bankAccount.deposit(500);
    expect(bankAccount.printBalance()).toEqual(500);
  });

  it("deposits 500, withdraws 500 and prints balance", () => {
    bankAccount.deposit(500);
    bankAccount.withdraw(250);
    expect(bankAccount.printBalance()).toEqual(250);
  });

  it("gives an error if you try to deposit 0", () => {
    bankAccount.deposit(0);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it("gives an error if you try to withdraw more than your account balance", () => {
    bankAccount.deposit(200);
    bankAccount.withdraw(300);
    expect(console.error).toHaveBeenCalledTimes(1);
  });


});

// 5. prints statement including the above transactions (mock dependency on transaction)
