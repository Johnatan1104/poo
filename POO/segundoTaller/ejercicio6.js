// Clase base
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    describir() {
        return `Vehículo: ${this.marca} ${this.modelo}, Año: ${this.año}`;
    }
}

// Clase derivada: Auto
class Auto extends Vehiculo {
    constructor(marca, modelo, año) {
        super(marca, modelo, año);
    }

    conducir() {
        return `Conduciendo el auto ${this.marca} ${this.modelo}.`;
    }
}

// Clase derivada: Moto
class Moto extends Vehiculo {
    constructor(marca, modelo, año) {
        super(marca, modelo, año);
    }

    conducir() {
        return `Conduciendo la moto ${this.marca} ${this.modelo}.`;
    }
}

// Crear un arreglo de vehículos
const catalogo = [
    new Auto("Toyota", "Corolla", 2020),
    new Moto("Yamaha", "MT-07", 2019),
    new Auto("Ford", "Mustang", 2021),
    new Moto("Kawasaki", "Ninja", 2022),
];

// Función para listar vehículos según su tipo
function listarVehiculos(vehiculos) {
    const autos = vehiculos.filter(vehiculo => vehiculo instanceof Auto);
    const motos = vehiculos.filter(vehiculo => vehiculo instanceof Moto);

    console.log("Autos:");
    autos.forEach(auto => {
        console.log(auto.describir());
        console.log(auto.conducir());
    });

    console.log("\nMotos:");
    motos.forEach(moto => {
        console.log(moto.describir());
        console.log(moto.conducir());
    });
}

// Ejecutar la función
listarVehiculos(catalogo);
