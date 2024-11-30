class Empleado {
    constructor(nombre, sueldoPorHora) {
        this.nombre = nombre;
        this.sueldoPorHora = sueldoPorHora;
    }

    calcularSueldo(horasTrabajadas) {
        throw new Error("Método 'calcularSueldo' debe ser implementado en clases derivadas.");
    }
}


class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, sueldoPorHora) {
        super(nombre, sueldoPorHora);
    }

    calcularSueldo(horasTrabajadas) {
        return this.sueldoPorHora * horasTrabajadas; 
    }
}
class EmpleadoMedioTiempo extends Empleado {
    constructor(nombre, sueldoPorHora) {
        super(nombre, sueldoPorHora);
    }

    calcularSueldo(horasTrabajadas) {
        return (this.sueldoPorHora * horasTrabajadas) / 2; 
    }
}


const empleados = [
    new EmpleadoTiempoCompleto("Alice", 20),
    new EmpleadoMedioTiempo("Bob", 15),
    new EmpleadoTiempoCompleto("Charlie", 25),
    new EmpleadoMedioTiempo("Diana", 18),
]                                   
const horasTrabajadas = [40, 20, 35, 15];
empleados.forEach((empleado, index) => {
    const sueldoTotal = empleado.calcularSueldo(horasTrabajadas[index]);
    console.log(`Empleado: ${empleado.nombre}, Sueldo Total: $${sueldoTotal.toFixed(2)}`);
});


