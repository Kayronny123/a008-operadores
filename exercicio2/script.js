//Faça um programa que pergunte ao usuário dois números.
// Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
//O primeiro numero é maior que segundo? true
//O primeiro numero é igual ao segundo? false

//O primeiro numero é divisível pelo segundo? true
//O segundo numero é divisível pelo primeiro? true
//divisível = com resto zero
//Obs: O true ou false vai depender dos números inseridos 
//e do resultado das operações.

let n1 = prompt("insira um número aleatório")
let n2 = prompt("insira um segundo número aleatório")

console.log("primeiro número é maior que o segundo?", n1>n2);
console.log("primeiro número é igual ao segundo", n1===n2);
console.log("primeiro número é divisível pelo segundo", n1%n2===0)
console.log("o primeiro número é divisível pelo segundo?", n2%n1===0)