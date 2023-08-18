console.log("--------------");
console.log("Taxas de Juros");
console.log("--------------");
let M = 90000;
let C = 60000;
let N = 24;
let i =((Math.pow(M/C, 1/N)-1)*100);

console.log(`A taxa de juros é ${i.toFixed(4)} `)