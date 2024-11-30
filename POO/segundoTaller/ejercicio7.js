// Clase Estudiante
class Estudiante {
    constructor(nombre, calificacion) {
        this.nombre = nombre;
        this.calificacion = calificacion;
    }
}

// Clase base: Curso
class Curso {
    constructor(nombreCurso) {
        this.nombreCurso = nombreCurso;
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    calcularPromedio() {
        if (this.estudiantes.length === 0) return 0;

        const totalCalificaciones = this.estudiantes.reduce((acc, estudiante) => acc + estudiante.calificacion, 0);
        return totalCalificaciones / this.estudiantes.length;
    }
}

// Clase derivada: CursoOnline
class CursoOnline extends Curso {
    constructor(nombreCurso, plataforma) {
        super(nombreCurso);
        this.plataforma = plataforma;
    }

    detallesCurso() {
        return `Curso Online: ${this.nombreCurso} en ${this.plataforma}`;
    }
}

// Clase derivada: CursoPresencial
class CursoPresencial extends Curso {
    constructor(nombreCurso, ubicacion) {
        super(nombreCurso);
        this.ubicacion = ubicacion;
    }

    detallesCurso() {
        return `Curso Presencial: ${this.nombreCurso} en ${this.ubicacion}`;
    }
}

// Crear estudiantes
const estudiante1 = new Estudiante("Alice", 85);
const estudiante2 = new Estudiante("Bob", 90);
const estudiante3 = new Estudiante("Charlie", 78);

// Crear un curso presencial
const cursoPresencial = new CursoPresencial("Matemáticas", "Edificio A, Aula 101");
cursoPresencial.agregarEstudiante(estudiante1);
cursoPresencial.agregarEstudiante(estudiante2);

// Crear un curso online
const cursoOnline = new CursoOnline("Programación en Javascript", "Plataforma X");
cursoOnline.agregarEstudiante(estudiante3);

// Calcular promedios
console.log(`Promedio ${cursoPresencial.nombreCurso}: ${cursoPresencial.calcularPromedio().toFixed(2)}`);
console.log(`Promedio ${cursoOnline.nombreCurso}: ${cursoOnline.calcularPromedio().toFixed(2)}`);

// Mostrar detalles de los cursos
console.log(cursoPresencial.detallesCurso());
console.log(cursoOnline.detallesCurso());
