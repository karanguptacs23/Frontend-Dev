// Q3 Online Food Ordering
const menu={burger:100,pizza:200,coffee:80};
function calculateBill(order){
  try{
    const prices=order.map(i=>{
      if(!menu[i]) throw new Error("Invalid item: "+i);
      return menu[i];
    });
    return prices.reduce((a,b)=>a+b,0);
  }catch(e){ console.error(e.message); }
}
console.log(calculateBill(["burger","pizza"]));
