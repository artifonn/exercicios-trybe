// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24

// Questão 1
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;
for (let i = 10; i > 0; i -= 1) {
  fatorial *= i;
};
console.log(fatorial);

// Questão 2
// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab".
// Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';

// let word = 'Hello';
// let reverter = '';

// for ( let i = 0; i < word.length; i += 1) {
//   reverter += word[word.length -1 - i];
// }
// console.log(reverter);

// Questao 3
// Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for ( let i = 0; i < array.length; i += 1) {
//   if ( array[i].length > maiorPalavra.length ) {
//     maiorPalavra = array[i];
//   }
// }

// for (let i = 0; i < array.length; i += 1) {
//   if(array[i].length < menorPalavra.length) {
//     menorPalavra = array[i];
//   }
// }
// console.log(maiorPalavra,);
// console.log(menorPalavra,);

// Questão 4
// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50

// let maiorNumero = 0;
// for (let numero = 0; numero <= 50; numero += 1) {
//   let numeroPrimo = true;
//   for (let divisor = 2; divisor < numero; divisor += 1) {
//     if (numero % divisor === 0) {
//       numeroPrimo = false;
//     };
//   };
//   if (numeroPrimo) {
//     maiorNumero = numero;
//   ;}
// };
// console.log(maiorNumero);
