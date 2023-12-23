export type BgHero = {
  id: number;
  name: string;
  description: string;
};

export type BgAnomaly = {
  id: number;
  name: string;
  description: string;
};

export type BgHistory = {
  id: number;
  date: Date;
  rate: number;
  selectedHero: BgHero;
  selectedAnomaly?: BgAnomaly;
};
