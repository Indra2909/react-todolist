import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import EditTask from "./EditTask";
import Popup from "reactjs-popup";


const Task = ({ task, deleteTasksServer, editTasksServer}) => {
  const checkState = (taskState) => {
    if (taskState === "important") {
      return "darkred";
    } else if (taskState === "not important") {
      return "darkgreen";
    } else {
      return "darkblue";
    }
  };

  // const state = checkState(task.state);

  return (
    <div className="card">
      {/* Card Top Button Element */}
      <div className="buttonElement">
        {/* Edit Button Action */}
        <Popup
          trigger={
            <div className="btnBadgeCard edit">
              <FaPencilAlt style={{ color: "white", cursor: "pointer" }} />
            </div>
          }
          modal
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="content">
                <EditTask
                  task={task}
                  editTasksServer={editTasksServer}
                  onSave={() => {
                    close();
                  }}
                />
              </div>
            </div>
          )}
        </Popup>

        {/* Delete Button Action */}
        <div
          className="btnBadgeCard delete"
          onClick={() => deleteTasksServer(task.id)}
        >
          <FaTimes style={{ color: "white", cursor: "pointer" }} />
        </div>
      </div>

      <h3 className="title">{task.text}</h3>
      <p className="description">{task.description}</p>

      {/* Date Tag */}
      <div className="bottomElement">
        <div
          className="dayTag"
          style={{ backgroundColor: checkState(task.state) }}
        >
          {task.day}
        </div>
      </div>
    </div>
  );
};

export default Task;
