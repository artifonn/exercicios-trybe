// 1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (valores of numbers) {
    console.log(valores)
}

// for(let i = 0; i < numbers.length; i+=1){
//     console.log(numbers[i]);
// }

// 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for(let i = 0; i < numbers.length; i+=1) {
//     soma += numbers[i];
// }
//     console.log(soma);

// 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for(let i = 0; i < numbers.length; i+=1){
//     soma += numbers[i]
// }
//     let media = soma / numbers.length;
//     console.log(media);

// 4- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     soma += numbers[i]
// }
// let media = soma / numbers.length;

// if (media > 20) {
//     console.log('Valor maior que 20.')
// } else {
//     console.log('Valor menor ou igual a 20.')
// }

// 5- Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorValor = numbers[0];

// for(let i = 0; i < numbers.length; i+=1){
//     if(numbers[i] > maiorValor) {
//         maiorValor = numbers[i];
//     }
// }
//     console.log(maiorValor);

// 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let qtImpar = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 !== 0) {
//         qtImpar += 1;
//     }
// }
// if (qtImpar === 0) {
//     console.log('Nenhum valor ímpar encontrado');
// }
// console.log(qtImpar);


// -7 Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorValor = numbers[0];

// for(let i = 0; i < numbers.length; i+=1){
//     if (numbers[i] < menorValor) {
//         menorValor=numbers[i];
//     }
// }
//     console.log(menorValor);

// 8- Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// let newArray = [];
// for(let i = 1; i <= 25; i+=1){
//     newArray.push(i)
// }
// console.log(newArray);

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

// let newArray = [];
// for(let i = 1; i <= 25; i+=1){
//     newArray.push(i)
// }
// for(let i =0; i < newArray.length; i+=1) {
//     console.log([i]/2);
// }
