const startAt = 97; // https://www.w3schools.com/charsets/ref_utf_basic_latin.asp
const glyphs = [...Array(26)].map((char, i) =>
  String.fromCharCode(i + startAt)
);

export function isPangram(input: string): boolean {
  input = input.toLowerCase();
  const found = glyphs.map((char) => input.includes(char));

  return found.length === 26 && !found.includes(false);
}
