// Reescreva os códigos do arquivo script.js utilizando o if ternário.
//código a ser reescrito

// if (nome === "José") {
//   console.log("Oi, Zé!");
// } else {
//   console.log("Olá, " + nome);
// }

// if (idade >= 18) {
//   console.log("pode tirar carteira de motorista!");
// } else {
//   console.log("Ainda não pode tirar carteira de motorista");
// }

const nome = prompt("Qual o seu nome?").toLowerCase();
console.log(nome === "josé" || nome === "jose" ? "Oi, Zé" : "Olá, " + nome);

const idade = Number(prompt("Qual a sua idade?"));
console.log(idade >= 18 ? "Pode tirar a carteira de motorista!" : "Ainda não pode tirar a carteira de motorista.");
