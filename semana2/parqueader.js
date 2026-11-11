const readline = require('node:readline/promises'); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function parqueadero(vehiculo,facturaCC,tiempo){
    let respuesta;
    let cobro;
    let tiempoEntero = Math.trunc(tiempo);

    switch(vehiculo){
        case "c":
            if (tiempo <= 0.25 ){
                respuesta = "El parqueadero es totalmente gratis. Gracias por visitarnos.";
                break;
            }else{
                if (tiempo > tiempoEntero){
                    cobro = (tiempoEntero + 1) * 4000;
                    
                }else{
                    cobro = tiempoEntero * 4000;
                }
                if (facturaCC === "s"){
                    if (cobro > 30000){
                        cobro = 30000 / 2;
                    }
                }else{
                    cobro = cobro / 2;
                }
                respuesta ="El cobro total del parqueadero es " + cobro ;
                break;
            }

        case "m":
            if (tiempo <= 0.25 ){
                respuesta = "El parqueadero es totalmente gratis. Gracias por visitarnos.";
                break;
            }else{
                if (tiempo > tiempoEntero){
                    cobro = (tiempoEntero + 1) * 2000;
                    
                }else{
                    cobro = tiempoEntero * 2000;
                }
                if (facturaCC === "s"){
                    if (cobro > 30000){
                        cobro = 30000 / 2;
                    }
                }else{
                    cobro = cobro / 2;
                }
                respuesta ="El cobro total del parqueadero es " + cobro ;
                break;
            }
        default:
            respuesta = "Tipo de vehiculo no valido.Intente de nuevo.";
            break;

    }
    return respuesta
}

async function main() {
    let vehiculo;
    const cobroMaximo = 30000;
    let facturaCC;
    let tiempo;

    while(true){
        console.log("Acontinuacion ingresara de manera correcta los datos solicitado, de otro modo el proceso no podra ser llevado correctamente.");
        vehiculo = (await rl.question("Ingrese la letra correspondiente a su vehiculo. c(carro) o m(moto): ")).toLocaleLowerCase().trim();
        facturaCC = (await rl.question("Tiene factura del centro comercial? Responda s(si) o n(no): ")).toLowerCase().trim();
        tiempo = Number(await rl.question("Ingrese la cantidad de minutos que parmanecio el vehiculo en el parqueadero: "));
        let tiempoDecimal = Math.trunc((tiempo/60) * 1000)/1000

        if (isNaN(vehiculo) && isNaN(facturaCC) && tiempo > 0){
            let respuesta = parqueadero(vehiculo,facturaCC,tiempoDecimal);
            console.log(respuesta);
            break;
        }else{
            console.log("Los datos ingresado no son correctos.");
            let continuar = (await rl.question("Desea volver a intentarlo? Escriba s(si) o n(no) ")).toLowerCase();
            if (continuar === "n"){
                break;
            }
        }
    }
    rl.close();
    
}

main();