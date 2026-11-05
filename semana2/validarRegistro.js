const readline = require('node:readline/promises'); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function Registrar(edad,terminos){
    let respuesta;
    if(edad >= 14 && terminos === "s"){
        respuesta = "El registro ha sido exitoso";
    }else{
        respuesta = "El registro no ha sido exitoso. Vuelvalo a intentar.";
    }

    return respuesta;
}

async function main() {
    
    while (true){
        console.log("Acontinuacion ingresara de manera correcta los datos solicitado, de otro modo el registro no podra ser llevado correctamente.");
        let edad = Number(await rl.question("Ingrese su edad: "));
        console.log("Tenga en cuenta que si no acepta los terminos no se podra hacer el registro.");
        let aceptaTerminos = (await rl.question("Acepta los terminos? Escriba s(si) o n(no) ")).toLowerCase();

        if(!isNaN(edad) && edad > 0 && edad < 120 ){
            respuesta = Registrar(edad,aceptaTerminos);
            console.log(respuesta);
            break;
        }else{
            console.log("Los datos que ha ingresado son incorrectos")
            let continuar = (await rl.question("Desea volver a intentarlo? Escriba s(si) o n(no) ")).toLowerCase();

            if (continuar === "n"){
                break;
            }
        }
        
    }
    rl.close();
}

main();