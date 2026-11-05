const readline = require('node:readline/promises'); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function main() {
    let unidades;

    
    while(true){
        unidades = Number(await rl.question("Ingrese la cantidad de unidades: "));
        if (isNaN(unidades)){
            console.log("Por favor, ingrese un número válido.");
        } else {
            if (unidades < 0 || unidades === 0){
                console.log("Rojo: Agotado.");
                break;
            }
            if (unidades > 0 && unidades <= 10){
                console.log("Amarillo: Pocas unidades.");
                break;
            }
            if (unidades > 10){
                console.log("Verde: Disponible.");
                break;
            }
        }
    }

}

main();