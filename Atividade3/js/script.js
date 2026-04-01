const name = prompt("Digite o nome do aluno:");
let notas = [];

for (let i = 1; i <= 3; i++) {
    let nota = parseFloat(prompt(`Digite a ${i}ª nota:`));
    notas.push(nota);
}

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

const media = soma / notas.length;

alert(`Aluno: ${name}\nMédia: ${media.toFixed(2)}`);