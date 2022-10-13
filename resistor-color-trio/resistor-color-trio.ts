export interface colorCode {
  [colorName: string]: number;
}

const colors: colorCode = {
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

function getCode(name: string): number {
  return colors[name];
}

function formatWithUnit(value: string): string {
  let result: string = value;
  let resultAsInt: number = parseInt(value);
  let unit = "ohms";

  if (resultAsInt >= 1000) {
    unit = "kiloohms";
    result = `${Math.floor(resultAsInt / 1000)}`;
  }

  return [result, unit].join(" ");
}

export function decodedResistorValue(colorNames: string[]): string {
  const [name1, name2, name3] = colorNames;
  const zeds = getCode(name3) > 0 ? "0".repeat(getCode(name3)) : "";
  const result = [getCode(name1), getCode(name2), zeds].join("");

  return formatWithUnit(result);
}
