// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.


const Transaction = {
    DEPOSIT: 'deposit', //положить
    WITHDRAW: 'withdraw', //снять
};

  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */ 
const account = {
    balance: 0,
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        return {
            id: this.transactions.length, // +1
            type,
            amount
        }
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance += amount;
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        console.log(transaction);
        this.transactions.push(transaction);
        console.log(this.transactions);
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (amount >= this.balance) {
            alert('Cнятие такой суммы не возможно, недостаточно средств.');
            return;
        }
        this.balance -= amount;
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        console.log(transaction);
        this.transactions.push(transaction);
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        return this.transactions.find(function(transaction) {
            return transaction.id === id;
        });
    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        total = 0;
        for(transactionType of this.transactions) {
            if (transactionType.type === type) {
                total += transactionType.amount
            }  

        } return total 
    }
};

// console.log(account.createTransaction(200, 'deposit'))
console.log(account.deposit(100));
console.log(account.deposit(30));
console.log(account.withdraw(20))
console.log(account.withdraw(80));
console.log(account.getBalance());
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal('withdraw'));