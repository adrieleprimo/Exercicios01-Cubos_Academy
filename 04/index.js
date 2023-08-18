console.log("--------------------------");
console.log("calculo de juros compostos");
console.log("--------------------------");
let C = 1000;
let I = 0.125;
let T = 5;
let M = C* Math.pow(1.0 + I, T);
console.log(`O valor do montante é ${M.toFixed(0)}`);