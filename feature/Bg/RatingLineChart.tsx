"use client";

import { LineChart, Title } from "@tremor/react";
import { format } from "date-fns";
import { roundUpToNumber } from "@/util/calculate";
import { useBgHistory } from "./hooks";

export const RatingLineChart = () => {
  const { histories } = useBgHistory(1);
  const dataset = histories.map((history) => ({
    date: format(history.date, "yyyy-MM-dd HH:mm:ss"),
    rate: history.rate,
  }));

  return (
    <>
      <Title>バトルグラウンド レート</Title>
      <LineChart
        className="mt-6"
        data={dataset}
        index="date"
        categories={["rate"]}
        colors={["emerald", "gray"]}
        yAxisWidth={50}
        minValue={roundUpToNumber(Math.min(...dataset.map((d) => d.rate))) - 50}
        maxValue={roundUpToNumber(Math.max(...dataset.map((d) => d.rate))) + 50}
      />
    </>
  );
};
