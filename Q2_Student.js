// Q2 Student Result Processing
class Student{
  constructor(name,marks){ this.name=name; this.marks=marks; }
  calculateAverage(){ return this.marks.reduce((a,b)=>a+b,0)/this.marks.length; }
  getGrade(){ const avg=this.calculateAverage(); return avg>=90?"A":avg>=75?"B":avg>=50?"C":"F"; }
}
console.log(new Student("A",[90,85,80]).getGrade());
