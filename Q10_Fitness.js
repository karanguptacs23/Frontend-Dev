// Q10 Fitness Analytics
class FitnessAnalytics{
  constructor(data){ if(!data.length) throw new Error("Empty"); this.data=data; }
  getActiveUsers(){ return this.data.filter(u=>u.steps>7000); }
  getAverageCalories(){ return this.data.reduce((a,u)=>a+u.calories,0)/this.data.length; }
  getUserSummary(){ return this.data.map(u=>`${u.user}: ${u.steps} steps`); }
}
console.log(new FitnessAnalytics([
{user:"A",steps:8000,calories:300},
{user:"B",steps:12000,calories:500},
{user:"C",steps:4000,calories:200}
]).getActiveUsers());
