let descendientes = "1 2";
let array = descendientes.split(" ");
console.log(array);
let resultado = 0;
for (let i = 0; i < array.length; i++) {
  resultado += Number(array[i]);
}

console.log(resultado);
