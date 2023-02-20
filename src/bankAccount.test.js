const BankAccount = require("./bankAccount");

describe("BankAccount class", () => {
  bankAccount = new BankAccount();

  it("returns balance of 0 when printBalance() called", () => {
    expect(bankAccount.printBalance()).toBe(0);
  });

  it("returns an empty array when printStatement() is called"),
    () => {
      expect(bankAccount.printStatement()).toEqual([]);
    };
});

// 2. returns empty array when printStatement() called
// 3. deposits 500 and prints balance (mock dependency on transaction)
// 4. withdraws 250 and prints balance (mock dependency on transaction)
// 5. prints statement including the above transactions (mock dependency on transaction)
