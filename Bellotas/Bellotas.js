let count = prompt();
count = Number(count);
let total = 0;

let numero = "2 4 15";
numero = numero.split(" ");

for (let a = 0; a < count; a++) {
  if (Number(numero[a]) > 10) {
    total += Number(numero[a]) - 10;
  }
}

console.log(total);
