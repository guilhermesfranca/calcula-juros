import input from 'readline-sync'

console.log('Aplicação de Juros');

let devido = input.question('Informe o valor devido: ');
let dias = input.question('informe quantos dias se passaram desde o vencimento: ');

var juros = " "
if (dias >= 15) {
    juros = 10
} else {
    juros = 5
}

let total = Number(devido) + (Number(devido)*juros)/100

console.log('Valor original da Dívida: R$'+devido)
console.log('Dias atrasados: '+dias);
console.log('Taxa de Juros: '+juros+"%");
console.log('Valor total com juros: R$'+total);
