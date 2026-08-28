let palabra = prompt().toUpperCase();
palabra = palabra.split("");
let vocales = 0;
console.log(palabra);
for (let i = 0; i < palabra.length; i++) {
  if (/[AEIOU]/.test(palabra[i])) {
    vocales++;
  }
}

console.log(vocales, palabra.length - vocales);

//traduje a c++ para poder meterlo al dmoj porque js no estaba
//disponible, tuve que sacar la vieja confiable XD

// #include <iostream>
// #include <string>
// #include <cctype>

// using namespace std;

// int main() {
//     string palabra;
//     getline(cin, palabra);

//     for (int c= 0; c<palabra.length(); c++) {
//          palabra[c] = toupper(palabra[c]);
//     }

//     int vocales = 0;

//     for (int i = 0 ; i< palabra.length() ; i++) {
//         if (palabra[i] == 'A' || palabra[i] == 'E' ||palabra[i] == 'I' || palabra[i] == 'O' || palabra[i] == 'U') {
//             vocales++;
//         }
//     }

//     cout << vocales << " " << palabra.length() - vocales << endl;

//     return 0;
// }
