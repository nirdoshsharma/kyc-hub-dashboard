import customersData from "../data/customers.json";
import { calculateRiskScore } from "../utils/riskScoreCalculator";
import { Progress, Tag, Card } from "antd";

function RiskAssessment() {
  const customers = customersData.map((customer) => ({
    ...customer,
    riskScore: calculateRiskScore(customer),
  }));

  const getColor = (score) => {
    if (score > 70) return "red";
    if (score > 40) return "gold";
    return "green";
  };

  const getLabel = (score) => {
    if (score > 70) return "High Risk";
    if (score > 40) return "Medium Risk";
    return "Low Risk";
  };

  return (
    <div>
      <h2>Risk Assessment</h2>
      {customers.map((customer) => (
        <Card key={customer.customerId} style={{ marginBottom: "20px" }}>
          <h3>{customer.name}</h3>
          <Progress
            percent={Math.round(customer.riskScore)}
            strokeColor={getColor(customer.riskScore)}
          />
          <Tag color={getColor(customer.riskScore)}>
            {getLabel(customer.riskScore)}
          </Tag>
        </Card>
      ))}
    </div>
  );
}

export default RiskAssessment;
