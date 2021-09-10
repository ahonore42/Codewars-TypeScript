// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


export function accum(s: string): string {
  let strAcc: string = ''
  for (let i: number = 0; i < s.length; i++) { 
    strAcc += `${s[i].toUpperCase()}`;
    if (i > 0) {
      let addChars: string = s[i].toLowerCase().repeat(i);
      strAcc += addChars;
    }
    if (i < s.length - 1) strAcc += '-';
  };
  return strAcc;
}