//import React from "react";
import "../index.css";
import PropTypes from "prop-types";

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      {" "}
      <label className="block text-gray-700">{label}</label>{" "}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
      />{" "}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
