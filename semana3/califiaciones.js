const { listenerCount } = require('node:cluster');
const { profileEnd } = require('node:console');
const readline = require('node:readline/promises'); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const delay = ms => new Promise(res => setTimeout(res, ms));

function reprobados (estudiantes){
    let estudiantesReprobados = [];
    for(let i = 0; i < estudiantes.length; i++){
        if(estudiantes[i][1] < 3.0){
            estudiantesReprobados.push([estudiantes[i][0],estudiantes[i][1]]);
        }
    }
    return estudiantesReprobados;
}

function aprobados (estudiantes){
    let estudiantesAprobados = [];
    for(let i = 0; i < estudiantes.length; i++){
        if(estudiantes[i][1] >= 3.0){
            estudiantesAprobados.push([estudiantes[i][0],estudiantes[i][1]]);
        }
    }
    return estudiantesAprobados;
}

function promedio(notas){
    let promedioNotas = 0;
    for (let i = 0; i < notas.length; i++){
        promedioNotas = promedioNotas + notas[i][1];
    }
    promedioNotas = promedioNotas / notas.length;
    return promedioNotas;

}

async function main() {
    let estudiantesYNotas = [];
    let promedioNotas;
    let notas = [];
    let EstudiantesAprobados;
    let estudiantesReprobados;
    while(true){
        let respuesta = (await rl.question("Desea agregar un estudiante y una nota? Escriba s(si) o n(no) ")).toLowerCase().trim();
        if (respuesta === "s"){
            let nombre = (await rl.question("Ingrese el nombre del estudiante: ")).trim();
            let nota = Number(await rl.question("Ingrese la nota del estudiante: "));
            if(!isNaN(nota) && nota >= 0){
                estudiantesYNotas.push([nombre,nota])
                notas.push(nota);
            }else{
                console.log("======================= WARNING ==================")
                console.log("Dato no permitido. Vuelva a intentarlo.")
                console.log("==================================================")
                await delay(3000);
            }
        }else{
            console.log("================================");
            console.log("Saliendo del sistema....");
            console.log("================================")
            await delay(3000);
            break;
        }
    }

    promedioNotas = promedio(estudiantesYNotas);
    EstudiantesAprobados = aprobados(estudiantesYNotas);
    const notaMaxima = Math.max(...notas);
    const notaMinima = Math.min(...notas);
    estudiantesReprobados = reprobados(estudiantesYNotas);

    console.log("Promedio: "+ promedioNotas);
    console.log("Los estudiantes aprobados son: " );
    console.log(EstudiantesAprobados);
    console.log("La nota maxima es : " + notaMaxima);
    console.log("La nota minima es : " + notaMinima);
    console.log("Los estudiantes reprobados son: ");
    console.log(estudiantesReprobados);

    rl.close()
}

main();