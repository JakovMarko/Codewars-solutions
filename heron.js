// Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

// Heron's formula:

// 𝑠
// ∗
// (
// 𝑠
// −
// 𝑎
// )
// ∗
// (
// 𝑠
// −
// 𝑏
// )
// ∗
// (
// 𝑠
// −
// 𝑐
// )
// s∗(s−a)∗(s−b)∗(s−c)
// ​

// where

// 𝑠
// =
// 𝑎
// +
// 𝑏
// +
// 𝑐
// 2
// s=
// 2
// a+b+c
// ​

// Output should have 2 digits precision.

function heron(a, b, c) {
  let s = (a + b + c) / 2;
  return Number(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2));
}
