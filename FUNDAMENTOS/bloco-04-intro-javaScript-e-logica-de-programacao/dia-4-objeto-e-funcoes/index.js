
// Usando o objeto abaixo, faça os exercícios a seguir:
// Imprima no console uma mensagem de boas-vindas para a personagem

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Ben vinda,' + info.personagem)

// Insira no objeto uma nova propriedade com o nome de chave 'recorrente'
// e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
info.recorrente = 'Sim';
console.log(info)

// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
for (let key in info) {
  console.log(key);
}
