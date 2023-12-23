import type { BgHero, BgAnomaly, BgHistory } from "./type";

export const useBgMaster = () => {
  return {
    heros: TestBgHeros,
    anomalies: TestAnomalies,
  };
};

export const useBgHistory = (userId: number) => {
  return { histories: TestBgHistory };
};

const TestBgHeros: BgHero[] = [
  {
    id: 1,
    name: "Jaina Proudmoore",
    description: "A powerful mage from the Warcraft series",
  },
  {
    id: 2,
    name: "Thrall",
    description: "The former Warchief of the Horde in the Warcraft series",
  },
  {
    id: 3,
    name: "Uther the Lightbringer",
    description: "A famous paladin from the Warcraft series",
  },
];

export const TestAnomalies: BgAnomaly[] = [
  {
    id: 1,
    name: "The Tide Rises",
    description: "At the end of your turn, give a friendly minion +1/+1",
  },
  {
    id: 2,
    name: "Blood Moon",
    description:
      "At the start of your turn, deal 1 damage to your lowest Health minion",
  },
  {
    id: 3,
    name: "Emerald Goggles",
    description: "At the start of your turn, give your left-most minion +1/+1",
  },
];

const TestBgHistory: BgHistory[] = [
  {
    id: 1,
    date: new Date("2021-01-01"),
    rate: 8000,
    selectedHero: TestBgHeros[0],
    selectedAnomaly: TestAnomalies[0],
  },
  {
    id: 2,
    date: new Date("2021-01-01"),
    rate: 8078,
    selectedHero: TestBgHeros[1],
    selectedAnomaly: TestAnomalies[0],
  },
  {
    id: 3,
    date: new Date("2021-01-01"),
    rate: 8100,
    selectedHero: TestBgHeros[2],
    selectedAnomaly: TestAnomalies[0],
  },
  {
    id: 4,
    date: new Date("2021-01-01"),
    rate: 8009,
    selectedHero: TestBgHeros[0],
    selectedAnomaly: TestAnomalies[1],
  },
];
