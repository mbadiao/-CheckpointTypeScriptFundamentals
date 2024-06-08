// on create une interface vehicule
interface vehicule {
  make: string;
  model: string;
  year: number;
  start: () => void;
}
// on crée une class car qui implemente l'interface vehicule
class car implements vehicule {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  // on crée une methode start qui affiche un message
  start() {
    console.log("Car engine started");
  }
}
// on crée une instance de la class car
const myCar = new car("Chevy", "Camaro", 2020);
// on appelle la methode start de l'instance myCar
myCar.start();
