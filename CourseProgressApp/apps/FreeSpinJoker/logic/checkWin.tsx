import { PAYLINES } from "./paylines";

export const checkWin = (grid: string[][]): number[][][] => {
  const winningPaylines: number[][][] = [];

  PAYLINES.forEach((line) => {
    const [[c1, r1], [c2, r2], [c3, r3]] = line;

    const symbol = grid[r1]?.[c1];

    console.log(`Checking payline:`, line);
    console.log(`Symbols: ${symbol}, ${grid[r2]?.[c2]}, ${grid[r3]?.[c3]}`);

    if (symbol && symbol === grid[r2]?.[c2] && symbol === grid[r3]?.[c3]) {
      console.log(`✅ Winning Payline Found:`, line);
      winningPaylines.push(line);
    }
  });

  return winningPaylines;
};
