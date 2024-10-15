//import React from 'react';
import { useState } from "react";
import "./index.css";
export default function App() {
  const [state, setState] = useState("");
  const [stateNim, setStateNim] = useState("");
  const handleSubmit = () => {
    alert(`Hi ${state}, with NIM ${stateNim}`);
  };
  const handleChange = (e) => {
    setState(e.target.value);
  };
  const handleNimChange = (e) => {
    setStateNim(e.target.value);
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-center">Masukan Nama</h1>
        <div className="mb-4">
          <label className="block text-gray700">
            Nama:
            <input
              type="text"
              value={state}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray700">
            NIM :
            <input
              type="text"
              value={stateNim}
              onChange={handleNimChange}
              className="border border-gray-300 p-2 w-full"
            />
          </label>
        </div>
        <input
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
          value="Submit"
        />
      </form>
    </div>
  );
}
