// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

export function decipherThis(str: string): string {
  return str.split(' ').map((word, idx) => {
    const converted: string = String.fromCharCode(Number(word.match(/[0-9]+/g)));
    const letters: any = word.match(/[a-zA-Z]+/g);
    if (!letters) word = converted;
    else {
      if (letters[0].length === 1) word = converted + letters[0];
      else if (letters[0].length === 2) word = converted + letters[0].slice(-1) + letters[0][0];
      else word = converted + letters[0].slice(-1) + letters[0].slice(1,-1) + letters[0][0];
    }
    return word;
  }).join(' ');
}