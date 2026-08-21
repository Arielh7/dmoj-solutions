let cadena = "asfsafsadsaa";
cadena = cadena.split(" ");
let masLarga = 0;
let count = 0;

for (let i = 0; i < cadena.length; i++) {
  if (/[aeiou]/.test(cadena[i].toLowerCase())) {
    count++;
    if (masLarga < count) masLarga = count;
  } else {
    count = 0;
  }
}

print(masLarga);

//Tuve que traducir a Python porque en js daba problema el juez xd pero es la misma logica que el codigo js
// cadena = input()
// mas_larga = 0
// contador = 0
// vocales = "aeiou"

// for i in range(len(cadena)):
//     if cadena[i].lower() in vocales:
//         contador += 1
//         if mas_larga < contador:
//             mas_larga = contador
//     else:
//         contador = 0

// print(mas_larga)  # 6
