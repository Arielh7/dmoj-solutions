let month = Number(gets());
let day = Number(gets());

const SPECIAL_MONTH = 2;
const SPECIAL_DAY = 18;

if (month === SPECIAL_MONTH && day === SPECIAL_DAY) {
  print("Special");
} else if (
  month < SPECIAL_MONTH ||
  (month === SPECIAL_MONTH && day < SPECIAL_DAY)
) {
  print("Before");
} else {
  print("After");
}
