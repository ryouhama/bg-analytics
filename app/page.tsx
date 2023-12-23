import { Suspense } from "react";
import { Card, Grid, Col, Text, Metric, Title } from "@tremor/react";
import { Rating } from "@/feature/Bg/Rating";
import { RatingLineChart } from "@/feature/Bg/RatingLineChart";
import { Loading } from "@/components/Loading";

export default function Dashboard() {
  return (
    <>
      <Title>Dashboard</Title>
      <div className="mt-6">
        <Grid numItemsMd={2} numItemsLg={3} className="gap-6">
          <Col numColSpan={1} numColSpanLg={3}>
            <Card className="h-256">
              <Suspense fallback={<Loading />}>
                <RatingLineChart />
              </Suspense>
            </Card>
          </Col>
          <Col numColSpan={2} numColSpanLg={1}>
            <Card className="h-32">
              <Suspense fallback={<Loading />}>
                <Rating />
              </Suspense>
            </Card>
          </Col>
          <Col>
            <Card className="h-32">
              <Text>Title</Text>
              <Metric>Todo</Metric>
            </Card>
          </Col>
        </Grid>
      </div>
    </>
  );
}
