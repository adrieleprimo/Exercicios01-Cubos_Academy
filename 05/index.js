console.log("-------------------------------------");
console.log("Calcule a distância entre dois pontos")
console.log("-------------------------------------");
let x1 = 1;
let x2 = 1;
let y1 = 1;
let y2 = 4;

let distancia = Math.pow((x1 - x2), 2) + Math.pow((y2 - y1), 2 );
console.log(`A distância entre os pontos X e Y é ${Math.sqrt(distancia)} `);