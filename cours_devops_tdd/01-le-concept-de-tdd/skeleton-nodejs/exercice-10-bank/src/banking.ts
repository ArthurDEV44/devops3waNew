interface Account {
    deposit(amount: number): void;
    withdraw(amount: number): void;
    printStatement(): void;
}

export class BankAccount implements Account {
    private balance: number = 0;
    private transactions: string[] = [];
  
    deposit(amount: number): void {
      if (amount <= 0) {
        throw new Error("Le montant du dépôt doit être supérieur à zéro.");
      }
  
      this.balance += amount;
      const transaction = `DATE | MONTANT | SOLDE\n${this.formatDate()} | ${amount.toFixed(2)} | ${this.balance.toFixed(2)}`;
      this.transactions.push(transaction);
    }
  
    withdraw(amount: number): void {
      if (amount <= 0) {
        throw new Error("Le montant du retrait doit être supérieur à zéro.");
      }
  
      if (amount > this.balance) {
        throw new Error("Fonds insuffisants pour le retrait.");
      }
  
      this.balance -= amount;
      const transaction = `DATE | MONTANT | SOLDE\n${this.formatDate()} | -${amount.toFixed(2)} | ${this.balance.toFixed(2)}`;
      this.transactions.push(transaction);
    }
  
    printStatement(): void {
      const statement = this.transactions.join("\n") + "\n";
      console.log(statement);
    }
  
    private formatDate(): string {
      const date = new Date();
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString();
      return `${day}/${month}/${year}`;
    }
}