import { BankAccount } from "../src/banking";

describe("Bank Account", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount();
  });

//   it("should deposit into the account", () => {
//     account.deposit(500);
//     expect(account.printStatement()).toContain("DATE | MONTANT | SOLDE\n");
//     expect(account.printStatement()).toContain("500.00 | 500.00");
//   });

//   it("should withdraw from the account", () => {
//     account.deposit(1000);
//     account.withdraw(500);
//     expect(account.printStatement()).toContain("DATE | MONTANT | SOLDE\n");
//     expect(account.printStatement()).toContain("-500.00 | 500.00");
//   });

  it("should not allow negative deposits", () => {
    expect(() => account.deposit(-100)).toThrowError("Le montant du dépôt doit être supérieur à zéro.");
  });

  it("should not allow negative withdrawals", () => {
    account.deposit(100);
    expect(() => account.withdraw(-50)).toThrowError("Le montant du retrait doit être supérieur à zéro.");
  });

  it("should not allow withdrawals exceeding the balance", () => {
    account.deposit(100);
    expect(() => account.withdraw(150)).toThrowError("Fonds insuffisants pour le retrait.");
  });
});