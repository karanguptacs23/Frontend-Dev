// Q5 Employee Inheritance
class Employee{
  constructor(name,dept){ this.name=name; this.department=dept; }
  work(){ return `${this.name} is working`; }
}
class Manager extends Employee{
  work(){ return `${this.name} is managing team`; }
}
console.log(new Manager("Raj","IT").work());
