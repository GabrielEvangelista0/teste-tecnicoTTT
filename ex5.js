let str = "Teste de string";

function interteCaracteres(str) {
    let str2 = "";
    for (let i = str.length - 1; i >= 0; i--) {
        str2 += str[i];
    }
    return str2;
}

console.log(`string antiga: ${str}`);
console.log(`string nova: ${interteCaracteres(str)}`);