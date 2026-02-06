import { useEffect, useState } from "react";

function AdminDashboard() {
  const [total, setTotal] = useState(null);
  const [perBus, setPerBus] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      try {
        // total students
        const res1 = await fetch(
          "http://localhost:5000/api/admin/students/count",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data1 = await res1.json();
        setTotal(data1.totalStudents);

        // students per bus
        const res2 = await fetch(
          "http://localhost:5000/api/admin/students/per-bus",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data2 = await res2.json();
        setPerBus(data2);
      } catch (err) {
        setError("Failed to load data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Admin Dashboard
        </h1>

        {error && <p className="text-red-500">{error}</p>}

        {total !== null && (
          <p className="mb-4 text-center">
            👨‍🎓 Total Students: <b>{total}</b>
          </p>
        )}

        <h2 className="text-lg font-semibold mb-2">
          Students per Bus
        </h2>

        <ul className="space-y-2">
          {perBus.map((bus) => (
            <li
              key={bus._id}
              className="flex justify-between bg-gray-50 p-2 rounded"
            >
              <span>🚌 {bus._id}</span>
              <span>{bus.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
