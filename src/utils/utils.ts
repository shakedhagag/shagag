export function getPostWords(content: string) {
  return content.split(" ").filter(Boolean).length;
}

export function readingTime(content: string | any) {
  // Convert to string or use empty string if not valid
  const contentStr = typeof content === "string" ? content : "";

  const wordsPerMinute = 200;
  const codeBlockMatches = contentStr.match(/```[\s\S]*?```/g) || [];

  const codeBlockWords = codeBlockMatches.join(" ").split(/\s+/).length;
  const normalWords = contentStr
    .replace(/```[\s\S]*?```/g, "")
    .split(/\s+/).length;

  return Math.ceil(normalWords / wordsPerMinute + codeBlockWords / 100);
}
