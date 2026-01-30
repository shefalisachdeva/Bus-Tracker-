import { useEffect, useState } from "react";

function Dashboard({ busId, onChangeBus }) {
  const [eta, setEta] = useState(8);
  const [alertShown, setAlertShown] = useState(false);

  const isRaining = true;

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

  const isDelayed = eta > 5;

  return (
    <div className="bg-white p-6 rounded shadow w-96 text-center">
      <h1 className="text-2xl font-bold mb-2">
        Bus {busId}
      </h1>

      <p className="text-gray-700 mb-4">
        🚍 Estimated arrival: <b>{eta} minutes</b>
      </p>

      {isDelayed && (
        <div className="bg-yellow-100 text-yellow-800 p-3 rounded mb-3">
          ⚠️ Bus is delayed.
        </div>
      )}

      {isRaining && isDelayed && (
        <div className="bg-blue-100 text-blue-800 p-3 rounded mb-3">
          ☔ It’s raining. Please wait indoors.
        </div>
      )}

      {eta === 0 && (
        <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
          ✅ Bus has arrived at your stop.
        </div>
      )}

      <button
        onClick={onChangeBus}
        className="text-blue-600 underline text-sm"
      >
        Change Bus
      </button>
    </div>
  );
}

export default Dashboard;
