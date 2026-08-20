let count = prompt();
count = Number(count);
let areaRestante = 0;

for (let i = 0; i < count; i++) {
  let l = prompt();
  l = Number(l);
  let r = l / 2;
  areaRestante = l * l - 3.14 * (r * r);
  console.log(areaRestante);
  areaRestante = 0;
}
