/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
// function modifyArray(nums) {
// method - 1
// let newArray = [];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 == 0) {
//     newArray[i] = nums[i] * 2;
//   } else {
//     newArray[i] = nums[i] * 3;
//   }
// }
// return newArray;

// method - 2
// let newArray = nums.map(val => {
//   if (val % 2 == 0) {
//     return val * 2;
//   } else {
//     return val * 3;
//   }
// })
// return newArray;

// method - 3
// let result = (n) => (n % 2 == 0 ? n * 2 : n * 3);
// let newArray = nums.map(result);
// return newArray;

// method - 4
// return nums.map(n => n = (n%2==0) ? n*2: n*3);
// }

// method - 5
// let modifyArray = (nums) => nums.map((val) => val * (2 + (val % 2)));

// method - 6
function modifyArray(nums) {
  nums.forEach((element, index) => {
    nums[index] = element * (2 + (element % 2));
  });

  return nums;
}

const n = 5;
const a = [1, 2, 3, 4, 5];

console.log(modifyArray(a).toString().split(",").join(" "));
