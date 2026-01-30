import { useEffect, useState } from "react";
import BusIdForm from "./components/BusIdForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [busId, setBusId] = useState(null);

  // Load Bus ID when app starts
  useEffect(() => {
    const savedBusId = localStorage.getItem("busId");
    if (savedBusId) {
      setBusId(savedBusId);
    }
  }, []);

  // Save Bus ID
  const handleBusSubmit = (id) => {
    if (!id) return;
    localStorage.setItem("busId", id);
    setBusId(id);
  };

  // Change Bus
  const handleChangeBus = () => {
    localStorage.removeItem("busId");
    setBusId(null);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {!busId ? (
        <BusIdForm onSubmit={handleBusSubmit} />
      ) : (
        <Dashboard
          busId={busId}
          onChangeBus={handleChangeBus}
        />
      )}
    </div>
  );
}

export default App;
