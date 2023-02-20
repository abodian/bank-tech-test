const Transaction = require('./transaction');

class BankAccount {
    constructor() {
        this.accountBalance = 0;
        this.accountStatement = [];
        this.date = '';
    }

    printBalance() {
        return this.accountBalance;
    }

    printStatement() {
        console.log('date || credit || debit || balance');

        this.accountStatement
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .forEach((element) => {
                const credit = element.credit !== null ? element.credit.toFixed(2) : '';
                const debit = element.debit !== null ? element.debit.toFixed(2) : '';
                const formattedDate = element.date.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                });
                console.log(
                    `${formattedDate} || ${credit} || ${debit} || ${element.balance.toFixed(2)}`
                );
            });
    }

    getDate(manualDate) {
        let dateObj;
        if (manualDate) {
            const dateParts = manualDate.split('/');
            const dateStr = `${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`;

            dateObj = new Date(dateStr);
        } else {
            dateObj = new Date();
        }
        // const formattedDate = dateObj.toLocaleDateString('en-GB', {
        //     day: '2-digit',
        //     month: '2-digit',
        //     year: 'numeric'
        // });
        this.date = dateObj;
    }

    deposit(amount, manualDate) {
        this.getDate(manualDate);
        const transaction = new Transaction(
            this.date,
            null,
            amount,
            (this.accountBalance += amount)
        );
        amount === 0
            ? console.error('Please deposit an amount above zero')
            : this.accountStatement.push(transaction);
    }

    withdraw(amount, manualDate) {
        this.getDate(manualDate);
        const transaction = new Transaction(
            this.date,
            amount,
            null,
            (this.accountBalance -= amount)
        );
        amount > this.accountBalance
            ? console.error('Funds not available, please try a lower amount')
            : this.accountStatement.push(transaction);
    }
}

module.exports = BankAccount;
