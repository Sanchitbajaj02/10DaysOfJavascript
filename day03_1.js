/*
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 */
function getSecondLargest(nums) {
  // Complete the function
  
  // Way - 1
  
  // let secondLargest=0, max;
  // nums.forEach(e => {
  //     max=nums[0];
  //     if (max < e) {
  //         max = e;
  //     }
  // })
  // secondLargest = max;
  // return secondLargest;

  // Way - 2

  const max = Math.max(...nums);
  return Math.max(...nums.filter(x => x !== max));

  // Way - 3

  // const unique = Array.from(new Set(nums));
  // const reverseSorted = unique.sort(function (a, b) {
  //   return b - a;
  // });
  // const second = reverseSorted[1];
  // return second;
}

nums = [2, 3, 6, 6, 5];
console.log("Second Largest: " + getSecondLargest(nums));
