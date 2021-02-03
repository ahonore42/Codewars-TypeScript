// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers 
// except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

export function findOutlier(integers: number[]): number {
  const evenOdd = (n: number): number => ((n % 2) + 2) % 2;
  
  let sample: number = integers.slice(0, 3)
  .map((num: number) => evenOdd(num))
  .reduce((acc: number,val: number) => acc+val, 0);
  
  return (sample === 1 || sample === 0) ? 
  integers.filter((num: number) => evenOdd(num)===1)[0]:
  integers.filter((num: number) => evenOdd(num)===0)[0];
}


