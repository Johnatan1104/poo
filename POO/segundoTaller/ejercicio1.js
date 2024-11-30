class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.calificaciones = [];
    }

    agregarCalificacion(calificacion) {
        this.calificaciones.push(calificacion);
    }

    calcularPromedio() {
        if (this.calificaciones.length === 0) {
            return 0;
        }
        const suma = this.calificaciones.reduce((acc, curr) => acc + curr, 0);
        return suma / this.calificaciones.length;
    }
}

// Ejemplo de uso
const estudiante = new Estudiante("CARLOS NAVIA",25);
console.log(estudiante.saludar());

estudiante.agregarCalificacion(85);
estudiante.agregarCalificacion(90);
estudiante.agregarCalificacion(78);

const promedio = estudiante.calcularPromedio();
console.log(`El promedio de calificaciones de ${estudiante.nombre} es: ${promedio.toFixed(2)}`);
