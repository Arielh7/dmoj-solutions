let recibidos = "4 7 2";
let ordenados = recibidos.split(" ").sort((a, b) => a - b);
let imprimir = 0;
let resultado = [];
let encontrado = false;

verificacion: for (let i = 0; i < ordenados.length; i++) {
  if (Number(ordenados[i]) % 3 === 0) {
    encontrado = true;
    imprimir = Number(ordenados[i]);
    break verificacion;
  }
}

if (!encontrado) {
  verificacion: for (let i = 0; i < ordenados.length; i++) {
    for (let a = 0; a < ordenados.length; a++) {
      resultado[0] = ordenados[i];
      resultado[1] = ordenados[a];
      if (Number(resultado.join("")) % 3 === 0) {
        encontrado = true;
        imprimir = Number(resultado.join(""));

        break verificacion;
      }
    }
  }
  resultado = [];
}
if (!encontrado) {
  verificacion: for (let i = 0; i < ordenados.length; i++) {
    for (let e = 0; e < ordenados.length; e++) {
      for (let a = 0; a < ordenados.length; a++) {
        resultado[0] = ordenados[i];
        resultado[1] = ordenados[e];
        resultado[2] = ordenados[a];
        if (Number(resultado.join("")) % 3 === 0) {
          encontrado = true;
          imprimir = Number(resultado.join(""));
          break verificacion;
        }
      }
    }
  }
  resultado = [];
}
console.log(imprimir);
