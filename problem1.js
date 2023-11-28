// Constructor function for BankAccount
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
  }
  
  // Add methods to BankAccount prototype
  BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Invalid deposit amount.");
    }
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Invalid withdrawal amount or insufficient funds.");
    }
  };
  
  BankAccount.prototype.checkBalance = function() {
    console.log(`Account balance: $${this.balance}`);
  };
  
  BankAccount.prototype.isActive = function() {
    return this.active;
  };
  
  // Function to calculate total balance of all active accounts
  function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (const account of accounts) {
      if (account.isActive()) {
        totalBalance += account.balance;
      }
    }
    return totalBalance;
  }
  
  // Create multiple BankAccount objects
  const account1 = new BankAccount(101, "John Doe", "Savings", 1000);
  const account2 = new BankAccount(102, "Jane Doe", "Checking", 1500);
  const account3 = new BankAccount(103, "Bob Smith", "Savings", 500);
  
  // Test deposit, withdrawal, and balance check operations
  account1.deposit(500);
  account1.withdraw(200);
  account1.checkBalance();
  
  account2.deposit(1000);
  account2.withdraw(200);
  account2.checkBalance();
  
  account3.deposit(200);
  account3.withdraw(300);
  account3.checkBalance();
  
  // Test isActive method
  console.log(`Account 1 is active: ${account1.isActive()}`);
  console.log(`Account 2 is active: ${account2.isActive()}`);
  console.log(`Account 3 is active: ${account3.isActive()}`);
  
  // Test getTotalBalance function
  const allAccounts = [account1, account2, account3];
  const totalBalance = getTotalBalance(allAccounts);
  console.log(`Total balance of all active accounts: $${totalBalance}`);
  