class Car {

    static getSpecs(car) {
        console.log(car)
    }

    constructor(obj) {
        this.maxSpeed = obj.maxSpeed;
        this.speed = 0;
        this.isOn = false;
        this.distance = 0;
        this._price = obj.price;
    }

    get price() {
        this._price;
    }

    set price(car) {
        this._price = car;
    }
  
    turnOn() {
        this.isOn = true; 
    }
  
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }
  
    accelerate(value) {
        if (this.speed + value < this.maxSpeed) {
            this.speed += value
        }
    }
  
    decelerate(value) {
        if (this.speed - value > 0) {
            this.speed -= value
        }
    }
  
    drive(hours) {
        if (this.isOn = true) {
            this.distance += hours * this.speed
        } 
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
  
Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
  
Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
console.log(mustang._price); // 2000
mustang.price = 4000;
console.log(mustang._price); // 4000