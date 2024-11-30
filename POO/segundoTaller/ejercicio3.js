class Producto {
    constructor(nombre, precio, cantidadEnStock) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
    }

    describir() {
        return `Producto: ${this.nombre}, Precio: $${this.precio}, Stock: ${this.cantidadEnStock}`;
    }
}
class Electrodomestico extends Producto {
    constructor(nombre, precio, cantidadEnStock, marca) {
        super(nombre, precio, cantidadEnStock);
        this.marca = marca;
    }

    describir() {
        return `${super.describir()}, Marca: ${this.marca}`;
    }
}
const inventario = [
    new Producto("Laptop", 1000, 5),
    new Electrodomestico("Refrigerador", 800, 8, "Samsung"),
    new Electrodomestico("Lavadora", 500, 15, "LG"),
    new Producto("Teléfono", 600, 2),
    new Electrodomestico("Horno Microondas", 150, 3, "Panasonic"),
];
function listarBajoStock(productos) {
    const bajoStock = productos.filter(producto => producto.cantidadEnStock < 10);
    
    console.log("Productos con stock menor a 10:");
    bajoStock.forEach(producto => {
        console.log(producto.describir());
    });
}
listarBajoStock(inventario);