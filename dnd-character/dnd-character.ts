const _sixSidedDie = [1, 2, 3, 4, 5, 6];

function _rollDie(): number {
  const min = 0;
  const max = _sixSidedDie.length - 1;
  const faceUp = Math.floor(Math.random() * (max - min + 1) + min);

  return _sixSidedDie[faceUp];
}

function _rollDice(): number[] {
  let rolls: number[] = [];

  for (let n = 0; n < 4; n++) {
    rolls.push(_rollDie());
  }

  return rolls;
}

export class DnDCharacter {
  strength = 0;
  dexterity = 0;
  constitution = 0;
  intelligence = 0;
  wisdom = 0;
  charisma = 0;

  get hitpoints(): number {
    return 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
  }

  public static generateAbilityScore(): number {
    const rolls: number[] = _rollDice();
    const min = Math.min(...rolls);

    return rolls.reduce((acc, curr) => (curr > min ? acc + curr : acc), 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
