User Stories

As a user
So I can manage my finances
I would like to print my bank account balance

As a user
So I can save money
I would like to deposit money into my bank account

As a user
So I can spend money
I would like to withdraw money from my account

As a user
So I can keep track of my finances
I would like to see a bank statement with date, credit, debit and balance

Example Output

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

Class and Model Planning

class BankAccount
  constructor {
  balance = 0
  transactions = []
  }

  printBalance()

  deposit(amount)

  withdraw(amount)

  printStatement()
end

model Transaction
  date (Date)
  credit (number)
  debit (number)
  balance (number)
end

Tests

Transaction (unit)

1. returns date
2. returns credit
3. returns debit
4. returns balance

BankAccount (unit)

1. returns balance of 0 when printBalance() called
2. returns empty array when printStatement() called
3. deposits 500 and prints balance (mock dependency on transaction)
4. withdraws 250 and prints balance (mock dependency on transaction)
5. prints statement including the above transactions (mock dependency on transaction)

Feature Test

1. deposits 500 and prints balance of 500
2. deposits 0 and gives error
3. withdraw 250 and prints balance of 250
4. prints statement 
