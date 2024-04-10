function isFibonacci(num) {
    let a = 0;
    let b = 1;
    while (b < num) {
        const antigoValB = b;
        b = a + b;
        a = antigoValB;
    }
    return b === num;
}

const numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci: "));

if (isFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
