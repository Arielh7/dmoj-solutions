let numero = "2340";

let elevado = Number(numero) ** 2;
elevado = String(elevado).split("");
let nuevoNumero = [];

if (elevado.length === 7) {
  for (let i = 1; i < 5; i++) {
    nuevoNumero[i - 1] = elevado[i];
  }
} else {
  for (let i = 2; i < elevado.length - 2; i++) {
    nuevoNumero[i - 2] = elevado[i];
  }
}

console.log(Number(nuevoNumero.join("")));
