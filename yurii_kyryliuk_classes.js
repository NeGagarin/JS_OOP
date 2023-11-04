class Car {
    constructor(mark, model, country, speed){
        this.mark = mark;
        this.model = model;
        this.country = country;
        this.speed = speed;
    }

    increaseSpeed(value) {
        this.speed += value;
    }

    decreaseSpeed(value) {
        this.speed -= value;
    }
}

class Truck extends Car {
    constructor(mark,model,country,speed){
        super(mark,model,country,speed);
    }

    takeWeight(weight) {
        console.log(`${this.mark} ${this.model} take ${weight} kg.`);
    }
}

class Bus extends Car {
    constructor(mark,model,country,speed){
        super(mark,model,country,speed);
    }

    takePeople(people) {
        console.log(`${this.mark} ${this.model} take ${people} people.`);
    }
}

class Transporter extends Car {
    constructor(mark,model,country,speed){
        super(mark,model,country,speed);
    }

    takeCars(cars) {
        consolr.log(`${this.mark} ${this.model} take ${car} car.`);
    }
}
/-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-/
const truck = new Truck("Mercedes" , "Actros 2545" , "Germany" , 90);
truck.increaseSpeed(10);
truck.takeWeight(5000);

const bus = new Bus("Mercedes" , "Sprinter" , "Germany" , 70);
bus.decreaseSpeed(5);
bus.takePeople(30);

const transporter = new Transporter("Mercedes" , "Actros 1848" , "Germany" , 80);
transporter.increaseSpeed(15);
transporter.takeCars(6);