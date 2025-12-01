// Q1 Library Book Management
class Library{
  constructor(){ this.books=[]; }
  addBook(book){ this.books.push(book); }
  getAvailableBooks(){ return this.books.filter(b=>b.available); }
  searchByAuthor(a){ return this.books.find(b=>b.author===a); }
}
const lib=new Library();
lib.addBook({title:"A",author:"X",available:true});
lib.addBook({title:"B",author:"Y",available:false});
lib.addBook({title:"C",author:"X",available:true});
console.log(lib.getAvailableBooks());
console.log(lib.searchByAuthor("X"));
