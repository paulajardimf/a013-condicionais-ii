// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3

const num = Number(prompt("Insira um número:"));

// 1. Utilizando ifs aninhados
if (num % 2 === 0) {
    console.log("O número é divisível por 2.");
    if (num % 3 === 0) {
        console.log("O número é divisível por 2 e por 3.");
    } else {
        console.log("O número não é divisível por 3.");
    }
} else {
    console.log("O número não é divisível por 2 e nem por 3.");
}

// 2. Utilizando um operador lógico para unir duas operações relacionais
if (num % 2 === 0 && num % 3 === 0) {
    console.log("O número é divisível por 2 e 3.(operador lógico)");
} else if (num % 2 === 0 || num % 3 === 0){
    let resto = 0;
    if (num % 2 === 0) {
        resto = 2
    } else {
        resto = 3
    }
    console.log(`O número é divisível por ${resto} (Operador lógico e atribuição de variável)`);
} else {
    console.log("O número não é divisível por 2 e nem por 3 (Operador lógico)");
}