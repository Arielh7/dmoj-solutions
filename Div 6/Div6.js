let count = prompt();
count = Number(count);
let suma = 0;

for (let i = 0; i < count; i++) {
  let numero = prompt();
  let array = numero.split("");

  for (let a = 0; a < array.length; a++) {
    suma += Number(array[a]);
  }

  if (suma % 3 === 0 && Number(array[array.length - 1]) % 2 === 0) {
    console.log("YES");
  } else console.log("NO");

  suma = 0;
}
