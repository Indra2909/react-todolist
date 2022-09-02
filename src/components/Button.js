import React from "react";
import PropTypes from "prop-types";

const Button = ({ addTaskOnClick, color, text }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        className="btn"
        onClick={addTaskOnClick}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
    
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
