const readline = require('node:readline/promises'); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });


function bisiesto (anio){
    let anioBisiesto = true;

    if (anio%4 === 0){
        anioBisiesto = true;
        if (anio%100 === 0){
            anioBisiesto = false;
            if(anio%400 == 0){
                anioBisiesto = true;
            }
        }
    }else{
        anioBisiesto = false;
    }
    return anioBisiesto;
}


async function main() {

    let anio = Number(await rl.question("Ingrese el anio del cual quiere saber si es bisiesto o no. "));
    let respuesta = bisiesto(anio);
    if (respuesta){
        console.log("El año " + anio + " es bisiesto"); 
    }else{
        console.log("El año " + anio + " no es bisiesto"); 
    }
    rl.close();
}

main();