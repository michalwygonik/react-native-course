import { reelSymbols } from "../components/symbols";

export const generateReels = (): {
  name: string;
  multiplier: number;
  imagePath: string;
}[][] => {
  return Array.from({ length: 3 }, () => {
    return Array.from(
      { length: 3 },
      () => reelSymbols[Math.floor(Math.random() * reelSymbols.length)]
    );
  });
};
