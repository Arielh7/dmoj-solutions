let cantidad = "3";
cantidad = Number(cantidad);
let numeros = [];
let resultado = [];
for (let i = 0; i < cantidad; i++) {
  let numero = "0";
  numeros.push(Number(numero));
}

for (let i = 0; i < cantidad; i++) {
  let aux = numeros[i];
  if (numeros[i] === 0) resultado.push(0);
  while (aux > 0) {
    resultado.push(aux % 2);
    aux = Math.floor(aux / 2);
  }

  console.log(`${numeros[i]}(2) = ${resultado.reverse().join("")}`);
  resultado = [];
}

//Tuve que traducir a python una vez mas, los proximos problemas los hago en python plp
//Creo que el problema esta en que JS no maneja bien numeros grandes
//Ademas, el js que usa el juez inventa la entrada gets() e inventa el print(), esto a veces
//falla, por eso, pa la pinga a usar python

// cantidad = int(input())
// numeros = []

// for i in range(cantidad):
//     numero = int(input().strip())  # Leer como entero normal (Python maneja números grandes)
//     numeros.append(numero)

// for i in range(cantidad):
//     aux = numeros[i]
//     binario = []

//     # Caso especial: el número es 0
//     if aux == 0:
//         binario.append(0)
//     else:
//         # Mientras aux sea mayor que 0
//         while aux > 0:
//             binario.append(aux % 2)
//             aux = aux // 2  # División entera

//     # Invertir el orden
//     binario.reverse()
//     print(f"{numeros[i]}(2) = {''.join(map(str, binario))}")
