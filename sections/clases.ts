export class car {
    brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;

    createdAt: number;

    constructor() {
        this.brand = 'no brand';
        this.doors = 0;
        this.fuelTank = 50;
        this.isRunning = false;
        this.type = 'No type';

        this.createdAt = 1234567890;
    }
    turnOn() {
        if (this.isRunning) {
            console.log('El carro ya está encendido y se daño el motor');
            return;
        } 
        if (this.fuelTank <= 0) {
            
            console.log('El carro no tiene gasolina');
            return;
        }
            this.isRunning = true;
            console.log('El carro esta encendidó');
        

    }
    //gas:number
    //gas >100, this.fuelTank = 100;
    //gas tiene positivo
    //si ya esta lleno, no se llena
    //si el tanque es 50 y añado 20, el valor del fulltank seria 70
    //si fueltank es 90 y añado 50 fuelTank deberia ser 100 

fillTank(gas: number) {
    if (gas <= 0) {
            console.log('La cantidad de gasolina debe ser positiva');
            return;
        }
        if (this.fuelTank >= 100) {
            console.log('El tanque ya está lleno');
            return;
        }
        if (this.fuelTank + gas > 100) {
            this.fuelTank = 100;
            console.log('El tanque se llenó completamente');
            return;
        }
        this.fuelTank += gas;
        console.log(`Se añadieron ${gas} litros de gasolina. El tanque ahora tiene ${this.fuelTank} litros.`);
        return;

        }


}



let myMazda = new car();


console.log(myMazda);
myMazda.fillTank(40);
myMazda.turnOn();
console.log(myMazda);