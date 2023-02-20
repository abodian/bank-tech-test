const Transaction = require("./transaction")

describe('Transaction', () => {
  it('creates a new transaction with the correct properties', () => {
    const date = new Date();
    const credit = 100;
    const debit = 0;
    const balance = 100;
    const transaction = new Transaction(date, credit, debit, balance);
    expect(transaction.date).toBe(date);
    expect(transaction.credit).toBe(credit);
    expect(transaction.debit).toBe(debit);
    expect(transaction.balance).toBe(balance);
  });
});