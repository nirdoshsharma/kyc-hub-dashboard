import { Card, Statistic } from "antd";

function StatsCard({ title, value }) {
  return (
    <Card>
      <Statistic title={title} value={value} />
    </Card>
  );
}

export default StatsCard;
