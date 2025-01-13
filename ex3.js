const dados = require('./dados.json')
let soma = 0;
let media = 0;
let maior = 0;
let diaMaior = 0;
let menor = 0;
let diaMenor = 0;
let diasAcimaDaMedia = 0;

for (let i = 0; i < dados.length; i++) {
    console.log(`${dados[i].dia} - ${dados[i].valor.toFixed(2)}`)
    if (dados[i].valor > maior) {
        maior = dados[i].valor;
        diaMaior = dados[i].dia;
    }
    if (dados[i].valor < menor) {
        menor = dados[i].valor;
        diaMenor = dados[i].dia;
    }
    soma = dados[i].valor == 0 ? soma : soma + dados[i].valor;
}

media = soma / dados.length;


for (let i = 0; i < dados.length; i++) {
    if (dados[i].valor > media) {
        diasAcimaDaMedia++;
    }
}

console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
console.log(`O maior valor é ${maior} no dia ${diaMaior}`);
console.log(`O menor valor é ${menor} no dia ${diaMenor}`);
console.log(`A média dos valores é ${media.toFixed(2)}`);