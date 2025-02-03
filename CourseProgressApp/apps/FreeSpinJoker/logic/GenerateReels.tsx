// List of symbols for the reels (you can replace these with image paths later)
const reelSymbols = ["red", "blue", "green", "yellow", "purple"];

// Function to generate random symbols for the reels
export const generateReels = (): string[][] => {
  return Array.from({ length: 3 }, () => {
    return Array.from(
      { length: 3 },
      () => reelSymbols[Math.floor(Math.random() * reelSymbols.length)]
    );
  });
};
