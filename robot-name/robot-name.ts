const _possibleGylphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const _generateGylphs = (count: number = 2): string => {
  let index = 0,
    result: string[] = [];

  do {
    const randPosition = Math.floor(Math.random() * _possibleGylphs.length);
    result.push(_possibleGylphs.split("")[randPosition]);
    index++;
  } while (index < count);

  return result.join("");
};

const _generateDigits = (count: number = 3, offset = 2): string =>
  `${Math.random()}`.substring(offset, count + offset);

let _usedNames: string[] = [];

export class Robot {
  serials: [string, string] = ["", ""];

  public get name(): string {
    return this.serials[0] + this.serials[1];
  }

  constructor() {
    this.resetName();
  }

  public resetName(): void {
    let [partA, partB] = [_generateGylphs(), _generateDigits()];

    if (_usedNames.includes(partA + partB)) {
      this.resetName();

      return;
    }

    this.serials = [partA, partB];
    _usedNames.push(this.name);
  }

  public static releaseNames(): void {
    _usedNames = [];
  }
}
