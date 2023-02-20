const BankAccount = require("./bankAccount");
const Transaction = require("./transaction");
jest.mock("./transaction", () => {
  return jest.fn().mockImplementation((date, debit, credit, balance) => {
    return {
      date,
      debit,
      credit,
      balance
    };
  });
});
console.error = jest.fn();
const consoleSpy = jest.spyOn(console, "log");

describe("BankAccount class", () => {
  let bankAccount;
  beforeEach(() => {
    bankAccount = new BankAccount();
    Transaction.mockClear();
    console.error.mockClear();
    consoleSpy.mockClear();
    bankAccount.accountBalance = 0;
  });

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

  it("prints statement with mocked date", () => {
    const fixedDate = new Date("2022-01-01T00:00:00.000Z");
    const bankAccount = new BankAccount(fixedDate);

    bankAccount.deposit(100);
    bankAccount.withdraw(50);

    bankAccount.printStatement();
    expect(consoleSpy).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
    expect(consoleSpy).toHaveBeenCalledWith("01/01/2022 ||  || 50 || 50");
    expect(consoleSpy).toHaveBeenCalledWith("01/01/2022 || 100 ||  || 100");
  });
});
