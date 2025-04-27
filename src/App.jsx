import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RiskAssessment from "./pages/RiskAssessment";
import WorkflowAutomation from "./pages/WorkflowAutomation";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/risk-assessment" element={<RiskAssessment />} />
            <Route path="/workflow" element={<WorkflowAutomation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
