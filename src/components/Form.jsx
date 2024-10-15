//import React from "react";
import "../index.css";
import PropTypes from 'prop-types';

const Form = ({ children, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="p-4 bg-white rounded shadow-md">
            {children}
        </form>
    );
};

Form.propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Form;

