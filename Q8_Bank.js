// Q8 BankAccount with private fields
class BankAccount{
  #balance=0;
  deposit(a){ this.#balance+=a; }
  withdraw(a){ if(a>this.#balance) throw new Error("Insufficient"); this.#balance-=a; }
  getBalance(){ return this.#balance; }
}
const acc=new BankAccount();
acc.deposit(1000);
try{ acc.withdraw(2000); }catch(e){ console.log(e.message); }
console.log(acc.getBalance());
