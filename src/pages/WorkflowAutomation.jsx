import { useState } from "react";
import customersData from "../data/customers.json";
import { calculateRiskScore } from "../utils/riskScoreCalculator";
import CustomerTable from "../components/CustomerTable";

function WorkflowAutomation() {
  const [customers, setCustomers] = useState(
    customersData.map((customer) => ({
      ...customer,
      riskScore: calculateRiskScore(customer),
    }))
  );

  const handleStatusChange = (customerId, newStatus) => {
    const updated = customers.map((c) =>
      c.customerId === customerId ? { ...c, status: newStatus } : c
    );
    setCustomers(updated);

    const changedCustomer = updated.find((c) => c.customerId === customerId);
    if (changedCustomer && changedCustomer.riskScore > 70) {
      console.log(
        `ALERT: High risk customer status updated! Customer ID: ${customerId}`
      );
    }
  };

  return (
    <div>
      <h2>Workflow Automation</h2>
      <CustomerTable
        customers={customers}
        onStatusChange={handleStatusChange}
        showStatusDropdown
      />
    </div>
  );
}

export default WorkflowAutomation;
