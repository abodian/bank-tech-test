# bank-tech-test

## Approach

Planning consisted of:

- User stories written
- Classes and functions illustrated on wireframe.cc
- Test templates were written with edge cases considered

## Structure

- Two classes: BankAccount, and a model class Transaction
- As this is a simple program I believed it to be counter-intuitive to complicate matters with more than two classes.
- The Transaction class handles a single transaction (date, deposit, withdrawal, balance)
- The BankAccount class tracks the overall balance, manages instances of Transaction and ultimately logs the statement to the console.
- I had considered creating a Date class due to JS not having a concise way to display DD/MM/YYY however in the end I settled with a simple function that handled that formatting, which I did think complicated the BankAccount class too much. If the app was to be expanded then I would consider a date/timestamp class with appropriate functions.

## Install and Run the Code

Navigate to root of project folder

```
npm install
```

```
node repl.js
```

Commands:

1. Deposit money into the account (where 'amount' is an integer)

```
bankAccount.deposit(amount, manualDate)
```

2. Withdraw money from the account (where 'amount' is an integer)

```
bankAccount.withdraw(amount, manualDate)
```

3. Print Bank Statement

```
bankAccount.printStatement()
```

4. Print Balance (as an integer only)

```
bankAccount.printBalance()
```

NB It is possible to input a date to a deposit or withdrawal manually. If a date is not passed to the above deposit and withdrawal commands, it will automatically input the date in which you run the command.

5. If you wish to check the testing of the code, run the below from project root

```
jest
```

## Dependencies

- Testing => jest ~ 29.4.3
- Lint => eslint-config-prettier ~ 8.6.0

## Screenshots
