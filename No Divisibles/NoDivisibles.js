let numero = prompt();
numero = Number(numero);
let count = 0;

for (let i = 1; i < numero; i++) {
  if (i % 2 !== 0 || i % 3 !== 0 || i % 5 !== 0) count++;
}

console.log(count);
