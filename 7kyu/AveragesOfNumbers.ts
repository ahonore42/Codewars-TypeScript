export function averages(numbers: number[] | null): number[] {
  if (numbers === null) {
    numbers = [];
    return numbers;
  }
  const avgArr: number[] = [];
  for (let i = 0; i < numbers.length-1; i++) {
    avgArr.push((numbers[i]+numbers[i+1])/2);
  }
  return avgArr;
}