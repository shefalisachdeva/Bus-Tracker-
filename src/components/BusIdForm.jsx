import { useState } from "react";

function BusIdForm({ onSubmit }) {
  const [busId, setBusId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!busId) {
      setError("Bus ID cannot be empty");
      return;
    }

    const busIdPattern = /^BUS_\d+$/;

    if (!busIdPattern.test(busId)) {
      setError("Invalid Bus ID format (example: BUS_07)");
      return;
    }

    setError("");
    onSubmit(busId);
  };

  return (
    <div className="bg-white p-6 rounded shadow w-80">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Enter Bus ID
      </h2>

      <input
        value={busId}
        onChange={(e) => setBusId(e.target.value.toUpperCase())}
        placeholder="BUS_07"
        className="w-full border px-3 py-2 rounded mb-2"
      />

      {error && (
        <p className="text-red-600 text-sm mb-3">
          {error}
        </p>
      )}

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Track My Bus
      </button>
    </div>
  );
}

export default BusIdForm;
