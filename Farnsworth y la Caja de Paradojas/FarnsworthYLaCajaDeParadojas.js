let numeros = "2 1 1";
numeros = numeros.split(" ");
let count = 3;

if (numeros[0] !== numeros[1] && numeros[0] != numeros[2]) count--;

if (numeros[1] != numeros[2]) count--;

console.log(count);
