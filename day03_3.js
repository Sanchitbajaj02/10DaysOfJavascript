/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  if (a > 0) {
    return "YES";
  } else {
    throw new Error(a === 0 ? "Zero Error" : "Negative Error");
  }
}

let n = 3;
let arr = [1, -2, 0];

for (let i = 0; i < n; i++) {
  let a = arr[i]
  try {
    console.log(isPositive(a));
  } catch (e) {
    console.log(e.message);
  }
}
