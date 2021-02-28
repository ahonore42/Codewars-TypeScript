// Given two integers a and b, which can be positive or negative, find the sum 
// of all the integers between including them too and return it. 
// If the two numbers are equal return a or b.
// Note: a and b are not ordered!

// Examples
// getSum(1, 0) == 1   // 1 + 0 = 1
// getSum(1, 2) == 3   // 1 + 2 = 3
// getSum(0, 1) == 1   // 0 + 1 = 1
// getSum(1, 1) == 1   // 1 Since both are same
// getSum(-1, 0) == -1 // -1 + 0 = -1
// getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

export function getSum(a: number, b: number): number {
  if (a === b) return a;
  let numsArr: number[] = [];
  let start: number = a < b ? a : b;
  let end: number = a < b ? b : a;
  
  for (let i = start; i <= end; i++) numsArr.push(i);
  return numsArr.reduce((a,v) => a+v, 0);
}