// Q6 Ride Sharing
class User{ constructor(name,rating){ this.name=name; this.rating=rating; } }
class Driver extends User{ constructor(name,rating,vehicle){ super(name,rating); this.vehicle=vehicle; } }
class Trip{
  constructor(from,to,distance){ this.from=from; this.to=to; this.distance=distance; }
  calculateFare(){ if(!this.distance||this.distance<0) throw new Error("Invalid distance"); return this.distance*10; }
}
try{ console.log(new Trip("A","B",12).calculateFare()); }catch(e){ console.log(e.message); }
