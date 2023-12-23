import type { BgHero, BgAnomaly, BgHistory } from "./type";

export const fetchBgMaster = async () => {
  const res = await fetch("/api/bg/master");
  const data: { heros: BgHero[]; anomalies: BgAnomaly[] } = await res.json();
  return data;
};

export const fetchBgHistory: (params: { userId: number }) => Promise<{
  histories: BgHistory[];
}> = async ({ userId }) => {
  const res = await fetch(`/api/bg/${userId}/history`);
  const data: { histories: BgHistory[] } = await res.json();
  return data;
};
