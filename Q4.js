// Q4 Multi-API Dashboard (Fetch + Promise.all)
document.getElementById("loading").style.display = "block";

Promise.all([
  fetch('/users').then(r => r.json()),
  fetch('/orders').then(r => r.json()),
  fetch('/products').then(r => r.json())
]).then(([users, orders, products]) => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("users").innerText = users.length;
  document.getElementById("orders").innerText = orders.length;
  document.getElementById("products").innerText = products.length;
}).catch(() => {
  document.getElementById("warning").innerText = "Some data could not be loaded.";
});