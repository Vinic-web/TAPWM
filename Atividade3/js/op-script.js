const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));

const soma = num1 + num2;
const subtracao = num1 - num2;
const produto = num1 * num2;
const divisao = num1 / num2;
const resto = num1 % num2;

alert(
`Resultados:
Soma: ${soma}
Subtração: ${subtracao}
Produto: ${produto}
Divisão: ${divisao}
Resto da divisão: ${resto}`
);