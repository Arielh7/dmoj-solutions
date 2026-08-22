const MOD = 1000000007;

let casos = Number(prompt());
let entradas = [];

for (let i = 0; i < casos; i++) {
  let valor = Number(prompt());
  entradas.push(valor);
}

for (let i = 0; i < entradas.length; i++) {
  let pasos = entradas[i];

  let a = 0;
  let b = 1;
  let c = 0;

  if (pasos <= 1) {
    b = pasos;
  } else {
    for (let j = 1; j <= pasos; j++) {
      c = (a + b) % MOD;
      a = b;
      b = c;
    }
  }

  console.log(b % MOD);
}

//Nota: Hay que aplicar modulo en cada suma porque sino el resultado da truncado, porque son numeros muy grandes y
//dan NaN por el camino Xd, aprendí a base de golpes
