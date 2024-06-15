export function getPostWords(content: string) {
  return content.split(" ").filter(Boolean).length;
}

const WORDS_PER_MINUTE = 200;
export function readingTime(wordsCount: number) {
  return Math.ceil(wordsCount / WORDS_PER_MINUTE);
}
