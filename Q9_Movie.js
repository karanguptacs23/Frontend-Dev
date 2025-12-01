// Q9 Movie Ticket Booking
class MovieTicket{
  constructor(movieName,seatNo,price){ this.movieName=movieName; this.seatNo=seatNo; this.price=price; }
}
MovieTicket.prototype.printTicket=function(){ return `${this.movieName} - Seat ${this.seatNo}`; };
class OnlineTicket extends MovieTicket{
  constructor(n,s,p,fee){ super(n,s,p); this.convenienceFee=fee; }
  getTotal(){ return this.price+this.convenienceFee; }
}
console.log(new OnlineTicket("Avengers",12,300,50).printTicket());
