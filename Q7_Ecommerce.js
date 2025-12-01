// Q7 Inventory System
const products=[
{id:1,name:"A",category:"mob",price:1000,stock:3},
{id:2,name:"B",category:"lap",price:2000,stock:10},
{id:3,name:"C",category:"mob",price:1500,stock:1}
];
function getLowStock(){ return products.filter(p=>p.stock<5); }
function sortByPrice(){ return [...products].sort((a,b)=>a.price-b.price); }
function totalValue(){ return products.reduce((t,p)=>t+p.price*p.stock,0); }
function groupByCategory(){ return products.reduce((g,p)=>{ g[p.category]=g[p.category]||[]; g[p.category].push(p); return g; },{}); }
