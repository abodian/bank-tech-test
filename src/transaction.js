class Transaction {
    constructor(date, credit, debit, balance) {
        this.date = date;
        this.credit = credit;
        this.debit = debit;
        this.balance = balance;
    }
}

module.exports = Transaction;
