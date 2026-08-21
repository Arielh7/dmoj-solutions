let cantidad = 3;
let problemas = [];

for (let i = 0; i < cantidad; i++) {
  let problema = "2 4 3 2";
  problema = problema.split(" ");
  problemas.push(problema);
}

for (let i = 0; i < problemas.length; i++) {
  if (problemas[i][0] * problemas[i][1] > problemas[i][2] * problemas[i][3])
    console.log(problemas[i][0] * problemas[i][1]);
  else console.log(problemas[i][2] * problemas[i][3]);
}

//completé la solucion en js pero tuve que traducir a phyton XD, la discriminacion de los problemas
//de DMOJ
