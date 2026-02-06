import { useState } from "react";

function Login({ onLogin }) {
  const [role, setRole] = useState("student");

  const handleLogin = () => {
    onLogin(role);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-80">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Login
      </h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full border p-3 rounded mb-6"
      >
        <option value="student">Student</option>
        <option value="driver">Driver</option>
        <option value="admin">Admin</option>
      </select>

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-3 rounded-xl"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
