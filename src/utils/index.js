export function truncateWord(word) {
  if (word.length > 20) {
    return word.slice(0, 20) + "...";
  }
  return word;
}
