const BankAccount = require("./src/bankAccount");
bankAccount = new BankAccount();
const Transaction = require("./src/transaction");
bankAccount.printStatement();

require("repl").start({});
