import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function IncomeExpenseChart({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
        Income vs Expenses
      </h2>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="5 5" stroke="#e5e7eb" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "none",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            }}
            labelStyle={{ color: "#6b7280", fontWeight: "bold" }}
          />
          <Legend
            verticalAlign="top"
            align="center"
            iconType="circle"
            iconSize={10}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ r: 5, strokeWidth: 2, fill: "white" }}
            activeDot={{ r: 7 }}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#EF4444"
            strokeWidth={3}
            dot={{ r: 5, strokeWidth: 2, fill: "white" }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IncomeExpenseChart;
