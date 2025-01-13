function eFibonacci(num) {
    if (num < 0) return false;
    if (num === 0 || num === 1) return true;

    let a = 0, b = 1, c = a + b;
    while (c <= num) {
        if (c === num) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

function checaFibonacci(num) {
    if (eFibonacci(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

checaFibonacci(5); 
checaFibonacci(6); 