console.log("-----------------");
console.log("Casos de COVID-19");
console.log("-----------------")
let Po = 1000;
let taxa = 4;
let dias = 7;
let P = Po * Math.pow(taxa, dias/dias);
console.log(`A quantidade de pessoas infectadas é de ${P} pessoas`)