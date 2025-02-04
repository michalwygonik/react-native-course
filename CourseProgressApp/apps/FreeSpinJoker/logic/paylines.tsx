export const PAYLINES: number[][][] = [
  // 1️⃣ Horizontal Wins (Left-to-right)
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ], // Left column
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ], // Middle column
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ], // Right column

  // 2️⃣ Diagonal Wins (Left-to-right)
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ], // Top-left to bottom-right
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ], // Bottom-left to top-right

  // 3️⃣ Zig-Zags (Left-to-right)
  [
    [0, 0],
    [0, 1],
    [1, 2],
  ], // Left Zigzag
  [
    [0, 1],
    [0, 2],
    [1, 1],
  ], // Center Left Zigzag
  [
    [1, 0],
    [1, 1],
    [2, 2],
  ], // Center Right Zigzag

  // ✅ **Additional Zigzag Patterns**
  [
    [1, 0],
    [2, 1],
    [2, 2],
  ], // Small Right Zigzag
  [
    [0, 1],
    [1, 2],
    [2, 1],
  ], // Middle Upward Zigzag
  [
    [0, 1],
    [1, 0],
    [2, 1],
  ], // Middle Downward Zigzag

  [
    [0, 0],
    [1, 1],
    [0, 2],
  ], // Top V shape
  [
    [2, 0],
    [1, 1],
    [2, 2],
  ], // Bottom V shape
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

  // 4️⃣ Special Zigzags (Left-to-right)
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

  // ✅ **More Complex Shapes**
  [
    [0, 0],
    [1, 1],
    [1, 2],
  ], // Half-L shape (Left)
  [
    [2, 0],
    [1, 1],
    [1, 2],
  ], // Half-L shape (Right)

  // 5️⃣ Crossed Patterns
  [
    [0, 0],
    [1, 2],
    [2, 0],
  ], // Cross Left
  [
    [0, 2],
    [1, 0],
    [2, 2],
  ], // Cross Right
  [
    [0, 0],
    [1, 0],
    [2, 2],
  ], // Mixed diagonal Left
  [
    [0, 2],
    [1, 2],
    [2, 0],
  ], // Mixed diagonal Right

  // 6️⃣ Special Paylines (Super rare)
  [
    [0, 0],
    [2, 2],
    [2, 0],
  ], // Corner 3 symbols
  [
    [0, 2],
    [2, 0],
    [2, 2],
  ], // Opposite Corner 3 symbols
  [
    [0, 1],
    [1, 2],
    [2, 1],
  ], // X Middle

  [
    [0, 0],
    [1, 1],
    [2, 1],
  ], // L-Shape
  [
    [2, 0],
    [1, 1],
    [0, 1],
  ], // Reverse L-Shape
];
