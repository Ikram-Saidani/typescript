"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() { console.log("Car engine started"); }
}
const car = new Car("Toyota", "Camry", 2022);
car.start();
