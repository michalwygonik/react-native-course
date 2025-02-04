import { reelSymbols } from "../components/symbols";
import { PAYLINES } from "./paylines";

export const checkWin = (
  grid: string[][]
): { payline: number[][]; multiplier: number }[] => {
  const winningPaylines: { payline: number[][]; multiplier: number }[] = [];

  PAYLINES.forEach((line) => {
    const [[c1, r1], [c2, r2], [c3, r3]] = line;
    const symbol = grid[r1]?.[c1];

    if (symbol && symbol === grid[r2]?.[c2] && symbol === grid[r3]?.[c3]) {
      const symbolData = reelSymbols.find((s) => s.name === symbol);
      const multiplier = symbolData ? symbolData.multiplier : 1; // Default to 1 if not found

      console.log(`✅ Winning Payline Found:`, line, `Multiplier:`, multiplier);
      winningPaylines.push({ payline: line, multiplier });
    }
  });

  return winningPaylines;
};
