const equivalentes = {
  A: 5,

  B: 4,

  C: 4,

  D: 3,

  E: 2,
};

let notaOrk = prompt();
notaOrk = String(notaOrk).toUpperCase();

console.log(equivalentes[`${notaOrk}`]);
