const readline = require('node:readline/promises'); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });


async function main() {
    let valor; 
    let contadorCarros = 0; 
    let totalValor = 0;
    while (valor != 0){
        valor = Number(await rl.question("Escriba el valor a cobrar (Si desea salir del sistema ingrese el numero 0): "));
        if(!isNaN(valor) && valor > 0){
            totalValor += valor;
            contadorCarros +=1;
        }else{
            if (valor === 0){
                console.log("============================")
                console.log("Saliendo del sistema.......");
                break;
            }else{
                console.log("El valor ingresado no es correcto. Vuelva a intentarlo.");
            }
        }
    }
    console.log("======================================")
    console.log("El total de carros atendidos es: " + contadorCarros);
    console.log("El total recaudado es: " + totalValor);

    rl.close();
}

main();