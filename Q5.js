function inverteString(string) {
    let stringInvertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}

const texto = prompt("Digite uma string que queira inverter: ");
console.log("String invertida:", inverterString(texto));
