console.log("---------------------------");
console.log("Bem vindo ao medidor de IMC");
console.log("---------------------------");
let peso = 76;
let altura = 1.79;
let IMC = peso / Math.pow(altura, 2);
console.log(`Seu IMC é ${IMC.toFixed(1)}`);
