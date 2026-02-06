import { useState } from "react";

function BusIdForm({ onSubmit }) {
  const [busId, setBusId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!busId) {
      setError("Bus ID is required");
      return;
    }

    const pattern = /^BUS_\d+$/;
    if (!pattern.test(busId)) {
      setError("Format should be BUS_07");
      return;
    }

    setError("");
    onSubmit(busId);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-80">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        College Bus Tracker
      </h2>

      <p className="text-sm text-gray-500 text-center mt-1 mb-6">
        Track your bus and avoid rain ☔
      </p>

      <input
        value={busId}
        onChange={(e) => setBusId(e.target.value.toUpperCase())}
        placeholder="BUS_07"
        className="w-full px-4 py-3 rounded-xl border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}

      <button
        onClick={handleSubmit}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700
                   text-white py-3 rounded-xl font-medium transition"
      >
        Track My Bus
      </button>
    </div>
  );
}

export default BusIdForm;
