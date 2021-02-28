// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

// #Examples:
// Challenge.getMiddle("test") should return "es"
// Challenge.getMiddle("testing") should return "t"
// Challenge.getMiddle("middle") should return "dd"
// Challenge.getMiddle("A") should return "A"

// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 
// in some test cases due to an error in the test cases). You do not need to test for this. 
// This is only here to tell you that you do not need to worry about your solution timing out.

// #Output
// The middle character(s) of the word represented as a string.

export class Challenge {
  static getMiddle(s:string) {
    const length: number = s.length
    const mid: number = length % 2 === 0 ? (length-2)/2 : Math.floor(length/2);
    return length % 2 === 0 ? s.slice(mid, mid+2) : s[mid];
  }
}