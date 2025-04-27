import StatsCard from "../components/StatsCard";
import IncomeExpenseChart from "../components/IncomeExpenseChart";
import RiskPieChart from "../components/RiskPieChart";
import CustomerTable from "../components/CustomerTable";
import customersData from "../data/customers.json";
import { calculateRiskScore } from "../utils/riskScoreCalculator";

function Dashboard() {
  const customers = customersData.map((customer) => ({
    ...customer,
    riskScore: calculateRiskScore(customer),
  }));

  const avgIncome =
    customers.reduce((acc, curr) => acc + curr.monthlyIncome, 0) /
    customers.length;
  const avgExpenses =
    customers.reduce((acc, curr) => acc + curr.monthlyExpenses, 0) /
    customers.length;

  const chartData = customers.map((c, index) => ({
    month: `M${index + 1}`,
    income: c.monthlyIncome,
    expenses: c.monthlyExpenses,
  }));

  const riskDistribution = [
    {
      riskLevel: "Low",
      value: customers.filter((c) => c.riskScore <= 40).length,
    },
    {
      riskLevel: "Medium",
      value: customers.filter((c) => c.riskScore > 40 && c.riskScore <= 70)
        .length,
    },
    {
      riskLevel: "High",
      value: customers.filter((c) => c.riskScore > 70).length,
    },
  ];

  return (
    <div>
      <h2>Dashboard Overview</h2>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <StatsCard title="Total Customers" value={customers.length} />
        <StatsCard title="Average Income" value={avgIncome.toFixed(2)} />
        <StatsCard title="Average Expenses" value={avgExpenses.toFixed(2)} />
      </div>
      <IncomeExpenseChart data={chartData} />
      <RiskPieChart data={riskDistribution} />
      <CustomerTable customers={customers} />
    </div>
  );
}

export default Dashboard;
