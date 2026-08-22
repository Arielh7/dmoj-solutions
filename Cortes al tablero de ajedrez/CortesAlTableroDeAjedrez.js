let total = Number(prompt());
let horizontal = 0;
let vertical = 0;
let max = 0;

if (total % 2 === 0) {
  horizontal = total / 2;
  vertical = total / 2;
  max = (horizontal + 1) * (vertical + 1);
} else {
  horizontal = total / 2 - 0.5;
  vertical = total / 2 + 0.5;
  max = (horizontal + 1) * (vertical + 1);
}

console.log(max);
