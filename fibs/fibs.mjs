export function fibs(num) {
  if (num <= 0) {
    return [];
  }

  const result = [];
  let step = 0;

  while (step < num) {
    if (step === 0) {
      result.push(0);
    }

    if (step === 1) {
      result.push(1);
    }

    if (step > 1) {
      result.push(result[step - 1] + result[step - 2]);
    }

    step++;
  }

  return result;
}
