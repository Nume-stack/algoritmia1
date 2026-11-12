let meta = Number(prompt("Ingresa el precio de los audifonos? : "));
let ahorro = 0;
let semanas = 0;
while(true){
    console.log("Semana " + semanas + ": llevas " + ahorro)
    if(ahorro >= meta){
        break;
    }
    ahorro+=5000;
    semanas+=1;}
console.log("Necesitas "+ semanas + " para comprarlos")