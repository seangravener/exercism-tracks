interface colorCode {
  [colorName: string]: number;
}

const colorCodes: colorCode = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export function decodedValue(colorNames: string[]): number {
  const [name1, name2] = colorNames;
  return Math.floor(parseInt(`${colorCodes[name1]}${colorCodes[name2]}`));
}
