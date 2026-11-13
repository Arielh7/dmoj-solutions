let casos = Number(prompt());
let secuencias = [];

for (let i = 0; i < casos; i++) {
  let linea = prompt();
  let partes = linea.split(" ");
  let secuencia = partes[1];
  secuencias.push(secuencia);
}

for (let i = 0; i < secuencias.length; i++) {
  let secuencia = secuencias[i];
  let count = 0;
  let valido = true;

  for (let c = 0; c < secuencia.length; c++) {
    if (secuencia[c] === ">") count++;
    else if (secuencia[c] === "<") count--;

    if (count < 0) {
      valido = false;
      break;
    }
  }

  if (count !== 0) valido = false;

  console.log(valido ? "legal" : "ilegal");
}
