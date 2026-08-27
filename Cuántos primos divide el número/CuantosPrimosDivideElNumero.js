let repeticiones = Number("1");
let numeros = [];

for (let i = 0; i < repeticiones; i++) {
  let numero = Number("6");
  numeros.push(numero);
}

for (let i = 0; i < numeros.length; i++) {
  let primos = 0;
  for (let a = 2; a <= numeros[i]; a++) {
    let count = 0;
    primos: for (let b = 2; b < a; b++) {
      if (a % b === 0) {
        count++;
        break primos;
      }
    }
    if (count === 0) {
      if (numeros[i] % a === 0) {
        primos++;
      }
    }
  }
  console.log(primos);
}
