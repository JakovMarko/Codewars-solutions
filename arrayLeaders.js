var arrayLeaders = (numbers) => {
  return numbers.filter(
    (a, i) => numbers.slice(i + 1).reduce((sum, b) => sum + b, 0) < a
  );
};
