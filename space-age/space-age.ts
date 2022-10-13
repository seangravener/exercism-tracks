const EARTH_YEAR_IN_SECONDS = 31_557_600;

interface Orbit {
  [planet: string]: {
    ratio: number;
  };
}

const orbits: Orbit = {
  mercury: { ratio: 0.2408467 },
  venus: { ratio: 0.61519726 },
  earth: { ratio: 1 },
  mars: { ratio: 1.8808158 },
  jupiter: { ratio: 11.862615 },
  saturn: { ratio: 29.447498 },
  uranus: { ratio: 84.016846 },
  neptune: { ratio: 164.79132 },
};

export function age(planet: string, seconds: number): number {
  return parseFloat(
    (seconds / (orbits[planet].ratio * EARTH_YEAR_IN_SECONDS)).toFixed(2)
  );
}
