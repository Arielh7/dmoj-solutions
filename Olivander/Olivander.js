let count = "3";
count = Number(count);
let varitas = [];
let cajas = [];
let espacio = true;

let varita = "3 4 5";
varita = varita.split(" ");
let caja = "2 9 4";
caja = caja.split(" ");

for (let i = 0; i < count; i++) {
  varitas.push(Number(varita[i]));
}

for (let a = 0; a < count; a++) {
  cajas.push(Number(caja[a]));
}

varitas = varitas.sort((a, b) => a - b);
cajas = cajas.sort((a, b) => a - b);

console.log(varitas);
console.log(cajas);

verificacion: for (let b = 0; b < count; b++) {
  if (varitas[b] > cajas[b]) {
    espacio = false;
    break verificacion;
  }
}

console.log(espacio ? "DA" : "NE");
