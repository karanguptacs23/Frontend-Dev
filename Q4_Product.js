// Q4 Product Discount System
function Product(name,price){
  this.name=name; this.price=price;
}
Product.prototype.applyDiscount=function(p){ return this.price - (this.price*p/100); };
const p1=new Product("A",1000);
console.log(p1.applyDiscount(10));
