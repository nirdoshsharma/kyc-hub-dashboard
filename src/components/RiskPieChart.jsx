import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#4F46E5", "#F59E0B", "#EF4444"]; // Nice modern colors

function RiskPieChart({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4 text-center text-gray-700">
        Risk Distribution
      </h2>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="riskLevel"
            cx="50%"
            cy="45%"
            outerRadius={100}
            innerRadius={50} // Makes it a donut chart
            paddingAngle={5} // Adds space between slices
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`} // % labels inside
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="#fff"
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
              border: "none",
            }}
            formatter={(value, name) => [`${value}`, name]}
          />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            wrapperStyle={{
              marginTop: "10px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RiskPieChart;
