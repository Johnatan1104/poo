// Clase base
class CuentaBancaria {
    constructor(numeroCuenta, saldoInicial) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldoInicial;
    }

    depositar(monto) {
        this.saldo += monto;
        console.log(`Se depositó $${monto} en la cuenta ${this.numeroCuenta}. Nuevo saldo: $${this.saldo.toFixed(2)}`);
    }

    retirar(monto) {
        if (monto > this.saldo) {
            console.log(`No se puede retirar $${monto} de la cuenta ${this.numeroCuenta}. Saldo insuficiente.`);
        } else {
            this.saldo -= monto;
            console.log(`Se retiró $${monto} de la cuenta ${this.numeroCuenta}. Nuevo saldo: $${this.saldo.toFixed(2)}`);
        }
    }

    mostrarSaldo() {
        console.log(`Saldo de la cuenta ${this.numeroCuenta}: $${this.saldo.toFixed(2)}`);
    }
}

class CuentaAhorros extends CuentaBancaria {
    constructor(numeroCuenta, saldoInicial, tasaInteres) {
        super(numeroCuenta, saldoInicial);
        this.tasaInteres = tasaInteres;
    }

    aplicarIntereses() {
        const intereses = this.saldo * this.tasaInteres / 100;
        this.saldo += intereses;
        console.log(`Se aplicaron intereses de $${intereses.toFixed(2)} a la cuenta ${this.numeroCuenta}. Nuevo saldo: $${this.saldo.toFixed(2)}`);
    }
}

class CuentaCorriente extends CuentaBancaria {
    constructor(numeroCuenta, saldoInicial) {
        super(numeroCuenta, saldoInicial);
    }

}
const cuentas = [
    new CuentaAhorros("AH123", 1000, 2.5),
    new CuentaCorriente("CC456", 500),
    new CuentaAhorros("AH789", 1500, 3.0),
];

// Función para realizar depósitos y retiros
function realizarOperaciones(cuentas) {
    cuentas.forEach(cuenta => {
        // Realizar depósitos
        cuenta.depositar(200);
        
        // Realizar retiros
        cuenta.retirar(150);
        
        // Si es una cuenta de ahorros, aplicar intereses
        if (cuenta instanceof CuentaAhorros) {
            cuenta.aplicarIntereses();
        }
        
        // Mostrar saldo final
        cuenta.mostrarSaldo();
    });
}

// Ejecutar la función
realizarOperaciones(cuentas);
