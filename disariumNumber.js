// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

const disariumNumber = (n) =>
  `${
    n === n.toString().split``.reduce((r, e, i) => r + e ** (i + 1), 0)
      ? "Disarium"
      : "Not"
  } !!`;
