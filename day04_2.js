/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let counter = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x == objects[i].y) {
      counter += 1;
    }
  }
  return counter;
}

const n = 5;
let objects = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];

console.log(getCount(objects));
