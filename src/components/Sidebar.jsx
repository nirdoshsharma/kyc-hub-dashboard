import { Menu } from "antd";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: 200,
        minHeight: "100vh",
        background: "#001529",
        color: "white",
      }}
    >
      {/* Logo Section */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <img
          src="https://www.kychub.com/wp-content/uploads/2023/05/LOGO_White.svg"
          alt="KYC Hub Logo"
          style={{ width: "120px", height: "auto" }}
        />
      </div>

      {/* Menu Items */}
      <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/risk-assessment">Risk Assessment</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/workflow">Workflow</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Sidebar;
