import React from "react";
import Button from "./Button";

const Header = ({addTaskOnClick, showHideStyle}) => {
  return (
    <div>
      <div className="header">
        <h1>To Do List</h1>
        <Button
          addTaskOnClick={addTaskOnClick}
          color={showHideStyle ? "#ff0000" : "#ff0000"}
          text={showHideStyle ? "Close" : "Add Task +"}
        />
      </div>
    </div>
  );
};

export default Header;
