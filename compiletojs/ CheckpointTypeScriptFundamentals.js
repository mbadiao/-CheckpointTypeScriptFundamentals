// on crée une class car qui implemente l'interface vehicule
var car = /** @class */ (function () {
    function car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // on crée une methode start qui affiche un message
    car.prototype.start = function () {
        console.log("Car engine started");
    };
    return car;
}());
// on crée une instance de la class car
var myCar = new car("Chevy", "Camaro", 2020);
// on appelle la methode start de l'instance myCar
myCar.start();
