class Curso {
    constructor(nombreCurso) {
        this.nombreCurso = nombreCurso;  
        this.estudiantes = [];
    }

    agregarEstudiantes(estudiante) {
        this.estudiantes.push(estudiante);
    }

    calcularPromedioCurso() {
        if (this.estudiantes.length === 0) return 0;

        let sumaCalificaciones = 0;
        let totalCalificaciones = 0;

        for (let i = 0; i < this.estudiantes.length; i++) {
            const estudiante = this.estudiantes[i];
            const calificaciones = estudiante.calificaciones;
            
            for (let j = 0; j < calificaciones.length; j++) {
                sumaCalificaciones += calificaciones[j];
                totalCalificaciones++;
            }
        }

        return totalCalificaciones === 0 ? 0 : sumaCalificaciones / totalCalificaciones;
    }
}

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, persona: ${this.nombre}, tu edad es: ${this.edad}`;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.calificaciones = [];
    }

    agregarCalificaion(calificacion) {
        if (typeof calificacion === 'number' && !isNaN(calificacion)) {
            this.calificaciones.push(calificacion);
        } else {
            return "Debes ingresar un valor válido";
        }
    }
}

// Ejemplo de uso
const curso1 = new Curso("Matemáticas");

// Estudiante 1
const estu1 = new Estudiante("Sebastian Rengifo", 25);
estu1.agregarCalificaion(2.3);
estu1.agregarCalificaion(1.5);
estu1.agregarCalificaion(4.0);
curso1.agregarEstudiantes(estu1);

// Estudiante 2
const estu2 = new Estudiante("Maria Lopez", 22);
estu2.agregarCalificaion(3.0);
estu2.agregarCalificaion(4.5);
curso1.agregarEstudiantes(estu2);

// Estudiante 3
const estu3 = new Estudiante("Juan Perez", 30);
estu3.agregarCalificaion(5.0);
estu3.agregarCalificaion(4.0);
estu3.agregarCalificaion(3.5);
curso1.agregarEstudiantes(estu3);

// Estudiante 4
const estu4 = new Estudiante("Ana Torres", 27);
estu4.agregarCalificaion(4.8);
estu4.agregarCalificaion(4.9);
curso1.agregarEstudiantes(estu4);

// Calcular promedio del curso
console.log("Promedio del curso:", curso1.calcularPromedioCurso());
