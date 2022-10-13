export function isLeap(year: number): Boolean {
  let answer =
    year % 400 === 0 ? year % 4 === 0 : year % 4 === 0 && year % 100 !== 0;

  return answer;

  if (answer) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        answer = true;
      } else {
        answer = false;
      }
    }
  }

  return answer;
}
