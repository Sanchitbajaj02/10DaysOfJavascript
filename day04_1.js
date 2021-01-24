/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = 2 * (a + b);
  this.area = a * b;
}

a = 4;
b = 5;

const rec = new Rectangle(a, b);

console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);
