let numeros = "50 8 5";
numeros = numeros.split(" ");
let resultado = 1;
let ordenado = [];
let nts = false;
ordenado.push(Number(numeros[1]));
ordenado.push(Number(numeros[2]));
ordenado = ordenado.sort((a, b) => a - b);

if (ordenado[1] % ordenado[0] === 0) {
  resultado += Math.floor(Number(numeros[0]) / ordenado[1]);
} else {
  let i = 2;
  let aux = ordenado[1] * 2;
  while (aux % ordenado[0] !== 0) {
    if (aux > Number(numeros[0])) {
      nts = true;
      break;
    }
    i++;
    aux = ordenado[1] * i;
  }

  if (!nts) {
    resultado += Math.floor(Number(numeros[0]) / aux);
  }
}

console.log(resultado);

//PD: tuve que traducir a python el mismo codigo para que pinchara
//Voy a tener que aprender a escribir en python XD
