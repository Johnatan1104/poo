// Clase base
class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    describir() {
        return `Soy ${this.nombre}, un ${this.especie}.`;
    }
}  

// Clase derivada: León
class Leon extends Animal {
    constructor(nombre) {
        super(nombre, 'León');
    }

    rugir() {
        return `${this.nombre} dice: ¡Ruaaaaaaaaaggggggg!`;
    }
}

// Clase derivada: Elefante
class Elefante extends Animal {
    constructor(nombre) {
        super(nombre, 'Elefante');
    }

    trompetear() {
        return `${this.nombre} dice: ¡FLIIIIIIU!`;
    }
}

// Clase derivada: Tigre
class Tigre extends Animal {
    constructor(nombre) {
        super(nombre, 'Tigre');
    }

    rugir() {
        return `${this.nombre} dice: ¡GRRRR!`;
    }
}

// Crear un arreglo de animales
const zoologico = [
    new Leon("Simba"),
    new Elefante("Dumbo"),
    new Tigre("Shere Khan"),
];

// Función para hacer sonar a los animales
function hacerSonidosAnimales(animales) {
    animales.forEach(animal => {
        // Mostrar descripción del animal
        console.log(animal.describir());
        
        // Hacer sonar al animal
        if (animal instanceof Leon) {
            console.log(animal.rugir());
        } else if (animal instanceof Elefante) {
            console.log(animal.trompetear());
        } else if (animal instanceof Tigre) {
            console.log(animal.rugir());
        }
    });
}

// Ejecutar la función
hacerSonidosAnimales(zoologico);
