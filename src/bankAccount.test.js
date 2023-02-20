const BankAccount = require("./bankAccount");
const Transaction = require("./transaction");
jest.mock("./transaction");

describe("BankAccount class", () => {
  let bankAccount;
  beforeEach(() => {
    Transaction.mockClear();
    bankAccount.accountBalance = 0;
  });

  bankAccount = new BankAccount();

  it("returns balance of 0 when printBalance() called", () => {
    expect(bankAccount.printBalance()).toBe(0);
  });

  it("returns an empty array when printStatement() is called", () => {
    expect(bankAccount.printStatement()).toEqual([]);
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
});

// 3. deposits 500 and prints balance (mock dependency on transaction)
// 4. withdraws 250 and prints balance (mock dependency on transaction)
// 5. prints statement including the above transactions (mock dependency on transaction)
