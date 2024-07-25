class BankAccount {
    #balance;
    
    constructor(balance = 0) {
        this.#balance = balance;
    }
    
    get showBalance() {
        return this.#balance;
    }
    
    deposit (value) {
        this.#balance += value;
        
        if (value < 0) {
            throw new Error("Deposit must be a positive value");
        }
    }
    
    withdraw (value) {
        if (value > 0) {
            if (value > this.#balance) {
                throw new Error("Unsufficient fund")
            }
            else {
                this.#balance -= value;
            }
        }
        else {
            throw new Error("Withdraw must be a positive value");
        }
    }
    
    static compareAccounts(account_1, account_2) {
        if (account_1.showBalance > account_2.showBalance)
        {
            return ("First account has more balance");
        }
        else if (account_2.showBalance > account_1.showBalance)
        {
            return ("Second account has more balance");
        }
        else
        {
            return ("Both of them have equal balance");
        }
    }
}

const first_account = new BankAccount(100);
const second_account = new BankAccount(200);

console.log(first_account.showBalance);
first_account.deposit(300);
first_account.withdraw(50);
console.log(first_account.showBalance);
console.log(BankAccount.compareAccounts(first_account, second_account));
