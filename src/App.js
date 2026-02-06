import { useState } from "react";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import DriverDashboard from "./pages/DriverDashboard";
import Dashboard from "./components/Dashboard";

function App() {
  const [role, setRole] = useState(null);

  if (!role) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <Login onLogin={setRole} />
      </div>
    );
  }

  if (role === "admin") return <AdminDashboard />;
  if (role === "driver") return <DriverDashboard />;

  // default = student
  return <Dashboard busId="BUS_07" onChangeBus={() => {}} />;
}

export default App;
