import React, { useState } from "react";
import "./index.css";

export default function App() {
  const fileInput = React.createRef();
  const [imageSrc, setImageSrc] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = fileInput.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
    alert(`Nama file: ${file.name}`);
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-center text-bold">Upload File</h1>
        <div className="mb-4">
          <label className="block text-gray-700">
            Pilih File
            <input
              type="file"
              ref={fileInput}
              style={{ marginLeft: "5px" }}
              className="border border-gray-300 p-2 w-full"
            />
          </label>
        </div>
        <button
          type="submit"
          style={{ marginLeft: "5px" }}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      {imageSrc && (
        <div style={{ marginTop: "20px" }}>
          <h2>Preview Gambar:</h2>
          <img
            src={imageSrc}
            alt="Preview"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}
