import { useState } from "react";
function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    // Simpan data pengguna di localStorage
    localStorage.setItem("user", JSON.stringify({ email, password }));
    onRegister(); // Panggil fungsi dari parent untuk berpindah ke login
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-400">
    <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-lg">
    <h2 className="text-bold text-lg text-center">Register Form</h2>
    <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border border-gray-300 p-2 w-full"
        required
      />
      </div>
      <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border border-gray-300 p-2 w-full"
        required
      />
      </div>
      <button type="submit" className="bg-pink-600 text-white py-2 px-4 rounded">
        Register
      </button>
    </form>
    </div>
  );
}
export default Register;
