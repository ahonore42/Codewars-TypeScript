// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) 
// in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. 
// Be sure your code doesn't time out.


export function sumPairs(ints: number[], s: number): [number, number] | void {  
  console.log(ints, "sum: ", s)
  const matches: {lastIndex: number, pair: [number, number]}[] = [];
  
  let short: number[] = ints;
  if (short.length > 20) {
    short = short.filter((value, index) => {
      return short.indexOf(value) === index;
    });
  }
  
  
  for (let i =0; i<short.length; i++) {
    let firstNum: number = short[i];
    let secondIndex = short.indexOf(s-firstNum, i+1);
    if (secondIndex !== -1) {
      console.log(secondIndex)
      matches.push({lastIndex: secondIndex, pair: [firstNum, short[secondIndex]]})
    }
  }
  
  if (matches.length) {
    console.log(matches)
    if (matches.length > 1) {
      matches.sort((a,b) => a.lastIndex - b.lastIndex)
    }
    return matches[0].pair
  }
  
  return undefined
}