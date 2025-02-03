export const PAYLINES: number[][][] = [
  // Horizontal Wins
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ], // Top row
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ], // Middle row
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ], // Bottom row

  // Vertical Wins
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ], // Left column
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ], // Middle column
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ], // Right column

  // Diagonal Wins
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ], // Top-left to bottom-right
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ], // Top-right to bottom-left

  // Zig-Zag and Advanced Patterns
  [
    [0, 0],
    [1, 1],
    [0, 2],
  ], // V shape
  [
    [2, 0],
    [1, 1],
    [2, 2],
  ], // Inverted V shape
  [
    [1, 0],
    [0, 1],
    [1, 2],
  ], // Small upward diagonal
  [
    [1, 0],
    [2, 1],
    [1, 2],
  ], // Small downward diagonal

  // More complex patterns (customize as needed)
  [
    [0, 0],
    [1, 1],
    [2, 0],
  ], // Left triangle
  [
    [0, 2],
    [1, 1],
    [2, 2],
  ], // Right triangle
  [
    [2, 0],
    [1, 1],
    [0, 0],
  ], // Reverse Left Triangle
  [
    [2, 2],
    [1, 1],
    [0, 2],
  ], // Reverse Right Triangle
  // ... (continue to 27)
];
