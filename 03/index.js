console.log("-------------------------");
console.log("Loja Só não pisa no meu boot");
console.log("-------------------------");
let valor_calcado = 110.00;
let meuValorDisponivel = 50;
let desconto = valor_calcado - meuValorDisponivel;
console.log(`Valor do desconto é ${(desconto*100/110).toFixed(1)}`);