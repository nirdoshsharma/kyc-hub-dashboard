import { Table, Tag, Select } from "antd";

function CustomerTable({
  customers,
  onStatusChange,
  showStatusDropdown = false,
}) {
  const columns = [
    {
      title: "Customer ID",
      dataIndex: "customerId",
      key: "customerId",
      sorter: (a, b) => a.customerId.localeCompare(b.customerId),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Monthly Income",
      dataIndex: "monthlyIncome",
      key: "monthlyIncome",
      sorter: (a, b) => a.monthlyIncome - b.monthlyIncome,
    },
    {
      title: "Risk Score",
      dataIndex: "riskScore",
      key: "riskScore",
      sorter: (a, b) => a.riskScore - b.riskScore,
      render: (riskScore) => (
        <Tag color={riskScore > 70 ? "red" : riskScore > 40 ? "gold" : "green"}>
          {Math.round(riskScore)}
        </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Review", value: "Review" },
        { text: "Approved", value: "Approved" },
        { text: "Rejected", value: "Rejected" },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status, record) =>
        showStatusDropdown ? (
          <Select
            defaultValue={status}
            style={{ width: 120 }}
            onChange={(value) => onStatusChange(record.customerId, value)}
          >
            <Select.Option value="Review">Review</Select.Option>
            <Select.Option value="Approved">Approved</Select.Option>
            <Select.Option value="Rejected">Rejected</Select.Option>
          </Select>
        ) : (
          status
        ),
    },
  ];

  return (
    <Table
      dataSource={customers}
      columns={columns}
      rowKey="customerId"
      pagination={{ pageSize: 5 }}
    />
  );
}

export default CustomerTable;
