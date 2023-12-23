import { Card, Grid, Col, Text, Metric, Title } from "@tremor/react";
import { Rating } from "@/feature/Bg/Rating";
import { RatingLineChart } from "@/feature/Bg/RatingLineChart";

export default function Dashboard() {
  return (
    <>
      <Title>Dashboard</Title>
      <div className="mt-6">
        <Grid numItemsMd={2} numItemsLg={3} className="gap-6">
          <Col numColSpan={1} numColSpanLg={3}>
            <Card className="h-256">
              <RatingLineChart />
            </Card>
          </Col>
          <Col numColSpan={2} numColSpanLg={1}>
            <Card className="h-32">
              <Rating />
            </Card>
          </Col>
          <Col>
            <Card className="h-32">
              <Text>Title</Text>
              <Metric>KPI 3</Metric>
            </Card>
          </Col>
        </Grid>
      </div>
    </>
  );
}
