//import React from 'react';
import { useState } from "react";
import "./index.css";
import Form from "./components/Form"; //file Form.jsx ada di folder components yang dibuat sebelumnya
import InputField from "./components/InputField"; // file InputFiled.jsx ada di folder components

function App() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${name}`);
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <Form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 
text-white rounded"
        >
          Submit
        </button>
      </Form>
    </div>
  );
}
export default App;
