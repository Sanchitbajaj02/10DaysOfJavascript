/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  let temp;
  try {
    temp = s.split("");
    temp.reverse();
    s = temp.join("");
    console.log(s);
  } catch (err) {
    console.log(err.message);
    console.log(s);
  }
  // let temp;
  // temp = s.split("");
  // temp.reverse();
  // s = temp.join('');
  // console.log(s);
}

let s = "1234";
reverseString(s);
