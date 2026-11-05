const readline = require('node:readline/promises'); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// 1. Función para validar la edad (Número)
function ValidarEdad(edad) {
  if (edad >= 18) {
    return "La persona es mayor de edad.";
  } else {
    return "La persona es menor de edad.";
  }
}

async function main() {

  // === VALIDACIÓN DE NÚMERO (Edad) ===
  let edad;
  while (true) {
    let edadTexto = await rl.question("Introduce tu edad: ");
    edad = parseInt(edadTexto);

    // Validamos: ¿Es un número real? ¿Es mayor o igual a cero? ¿Es un número entero?
    if (isNaN(edad) || edad < 0 || edadTexto.includes('.') || edad > 120) {
      console.log("❌ Por favor, introduce una edad válida (número entero positivo).\n");
    } else {
      break; // Si el número es correcto, rompemos el bucle 'while'
    }
  }

  // === RESULTADO FINAL ===
  console.log(`\n=================================`);
  let resultadoValidacion = ValidarEdad(edad);
  console.log(resultadoValidacion);
  console.log(`=================================`);
  
  rl.close();
}

main();
