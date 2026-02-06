import { useEffect, useState } from "react";

function Dashboard({ busId, onChangeBus }) {
  const [eta, setEta] = useState(8);
  const [alertShown, setAlertShown] = useState(false);

  const isRaining = true;
  const isDelayed = eta > 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setEta((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (eta <= 2 && !alertShown) {
      alert("🚍 Bus arriving soon. Please proceed to the stop.");
      setAlertShown(true);
    }
  }, [eta, alertShown]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-96">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Bus {busId}
        </h1>
        <p className="text-sm text-gray-500">
          Live route status
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 text-center mb-4">
        <p className="text-gray-600 text-sm">Estimated Arrival</p>
        <p className="text-4xl font-bold text-blue-600 mt-1">
          {eta} min
        </p>
      </div>

      {isDelayed && (
        <div className="bg-yellow-100 text-yellow-800 rounded-xl p-3 mb-3 text-sm">
          ⚠️ Bus is running late
        </div>
      )}

      {isRaining && isDelayed && (
        <div className="bg-blue-100 text-blue-800 rounded-xl p-3 mb-4 text-sm">
          ☔ It’s raining. Please wait indoors.
        </div>
      )}

      {eta === 0 && (
        <div className="bg-green-100 text-green-800 rounded-xl p-3 mb-4 text-sm">
          ✅ Bus has arrived
        </div>
      )}

      <button
        onClick={onChangeBus}
        className="w-full mt-4 py-2 rounded-xl border
                   border-gray-300 text-gray-700 text-sm
                   hover:bg-gray-100 transition"
      >
        Change Bus
      </button>
    </div>
  );
}

export default Dashboard;
