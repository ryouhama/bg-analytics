import { Text, Metric, BadgeDelta } from "@tremor/react";
import { useBgHistory } from "./hooks";
import { BgHistory } from "./type";

export async function Rating() {
  const dammyUserId = 1;
  const { histories } = await useBgHistory(dammyUserId);

  return (
    <>
      <Text>レート</Text>
      {histories.length >= 1 ? (
        <RatingContent histories={histories} />
      ) : (
        <NoRating />
      )}
    </>
  );
}

const NoRating = () => <Metric>-</Metric>;

const RatingContent = ({ histories }: { histories: BgHistory[] }) => {
  const existsCurrentAndPrev = histories.length >= 2;

  return (
    <>
      <Metric>{histories[histories.length - 1].rate}</Metric>
      {existsCurrentAndPrev ? <RatingDelta histories={histories} /> : "0"}
    </>
  );
};

const RatingDelta = ({ histories }: { histories: BgHistory[] }) => {
  const currentRate = histories[histories.length - 1].rate;
  const prevRate = histories[histories.length - 2].rate;
  const deltaType =
    currentRate - prevRate >= 0 ? "moderateIncrease" : "moderateDecrease";
  return (
    <BadgeDelta deltaType={deltaType}>{currentRate - prevRate}</BadgeDelta>
  );
};
