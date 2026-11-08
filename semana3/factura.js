const readline = require('node:readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function CalcularPorcentaje(valor, porcentaje) {
    return (valor * porcentaje) / 100;
}

async function main() {
    let pruductosXCantidad = [];
    let subtotal = 0;
    let total = 0;
    let impuesto = 0;
    let propina = 0;

    while (true) {
        let respuesta = (await rl.question("Desea agregar ingresar una nueva Factura? Escriba s(si) o n(no)  ")).toLowerCase().trim();
        if (respuesta === "s") {
            let cantidadProductos = Number(await rl.question("Ingrese la cantidad de productos: "));
            if (isNaN(cantidadProductos) || cantidadProductos <= 0) {
                console.log("======================= WARNING ==================")
                console.log("Dato no permitido. Vuelva a intentarlo.")
                continue;
            } else {
                for (let i = 0; i < cantidadProductos; i++) {
                    let nombreProducto = (await rl.question("Ingrese el nombre del producto: ")).trim();
                    let cantidadProducto = Number(await rl.question("Ingrese la cantidad del producto: "));
                    let precioProductoUnitario = Number(await rl.question("Ingrese el precio del producto: "));
                    if (isNaN(cantidadProducto) || isNaN(precioProductoUnitario) || cantidadProducto < 0 || precioProductoUnitario < 0) {
                        console.log("======================= WARNING ==================")
                        console.log("Dato no permitido. Vuelva a intentarlo.")
                        continue;
                    } else {
                        let producto = {
                            nombre: nombreProducto,
                            cantidad: cantidadProducto,
                            precioUnitario: precioProductoUnitario,
                            total: cantidadProducto * precioProductoUnitario
                        };
                        pruductosXCantidad.push(producto);
                    }
                }
            }

        } else {
            console.log("================================");
            console.log("Saliendo del sistema....");
            console.log("================================")
            break;
        }
    }

    subtotal = pruductosXCantidad.reduce((acc, producto) => acc + producto.total, 0);
    let respuesta2 = (await rl.question("Desea agregar la propina del 8%? Escriba s(si) o n(no)  ")).toLowerCase().trim();
    if (respuesta2 === "s") {
        propina = CalcularPorcentaje(subtotal, 8);
    }else{
        propina = 0;
    }
    impuesto = CalcularPorcentaje(subtotal, 10);
    total = subtotal + impuesto + propina;
    console.log("================================");
    console.log("Factura:");
    console.log("================================");
    for (let producto of pruductosXCantidad) {
        console.log(`- ${producto.nombre}: ${producto.cantidad} x $${producto.precioUnitario} = $${producto.total}`);
    }
    console.log(`Subtotal: $${subtotal}`);
    console.log(`Impuesto (10%): $${impuesto}`);
    console.log(`Propina (8%): $${propina}`);
    console.log(`Total: $${total}`);
    rl.close();

}

main();