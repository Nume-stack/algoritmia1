const readline = require('node:readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function main() {
    let filas;
    while (true) {
        filas = Number(await rl.question("De cuantas filas desea la piramide?:  "));
        if (!isNaN(filas) && filas > 0) {

            for (let i = 1; i <= filas; i++) {
               
                const espacios = " ".repeat(filas - i);
                const bloques = "*".repeat(2 * i - 1);

                console.log(espacios + bloques);
            }

        } else {
            console.log("================== WARNING =========");
            console.log("El dato solicitado no es correcto");
            console.log("====================================");
        }
        let continuar = (await rl.question("Quieres otra piramide? Responde s(si) o n(no).  ")).toLowerCase().trim();
        if(continuar === "n"){
            break;
        }
    }
    rl.close();

}

main();