type Strand = string;
type Sequence = Strand[];
type Sequences = Sequence[];

const DNA: Sequence = ["G", "C", "T", "A"];
const RNA: Sequence = ["C", "G", "A", "U"];
const sequences: Sequences = [DNA, RNA];

// Try using Set.has() to validate strand.
function isValidStrand(strand: Strand, type = 0): Boolean {
  return Boolean(
    strand.split("").reduce((result, symbol) => {
      return result ? sequences[type].includes(symbol) : false;
    }, true)
  );
}

function validateDna(dna: Strand): Strand {
  if (!isValidStrand(dna)) {
    throw new Error("Invalid input DNA.");
  }
  return dna;
}

function transposeDna(dnaSymbol: string): string {
  const [dnaSequence, rnaSequence] = sequences;
  return rnaSequence[dnaSequence.findIndex((symbol) => symbol === dnaSymbol)];
}

export function toRna(dna: Strand): Strand {
  return validateDna(dna)
    .split("")
    .reduce((rnaStrand, dnaSymbol) => rnaStrand + transposeDna(dnaSymbol), "");
}
