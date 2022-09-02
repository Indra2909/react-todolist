import React from "react";
import { useState } from "react";

const EditTask = ({ task, editTasksServer, onSave }) => {
  const [text, setText] = useState(task.text);
  const [day, setDay] = useState(task.day);
  const [reminder, setReminder] = useState(task.reminder);
  const [state, setState] = useState(task.state);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task !");
      return;
    }

    const updatedTask = { text, day, reminder, state };
    //console.log(updatedTask);

    editTasksServer(updatedTask, task.id);

    onSave();
  };

  return (
    <div className="editTask">
      <h2 className="headingTitle">Edit Task</h2>
      <form className="editTask-form" onSubmit={onSubmit}>
        <div className="editTask-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="editTask-control">
          <label>Date</label>
          <input
            type="text"
            placeholder="Add (MM/DD)"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="editTask-control checkboxGroup">
          <label>Set Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <div className="editTask-control radioGroup">
          <label className="title">State</label>
          <div
            className="halfContainer"
            onChange={(e) => setState(e.target.value)}
            value={state}
          >
            <div className="radioLabelGroup">
              <input
                type="radio"
                name="state"
                value="important"
                defaultChecked={state === "important"}
                readOnly
              />
              <label>Important</label>
            </div>
            <div className="radioLabelGroup">
              <input
                type="radio"
                name="state"
                value="not important"
                defaultChecked={state === "not important"}
                readOnly
              />
              <label>Not Important</label>
            </div>
            <div className="radioLabelGroup">
              <input
                type="radio"
                name="state"
                value="neutral"
                defaultChecked={state === "neutral"}
                readOnly
              />
              <label>Neutral</label>
            </div>
          </div>
        </div>

        <div className="action">
          <input type="submit" value="Save Form" className="btnForm" />
        </div>
      </form>
    </div>
  );
};

export default EditTask;

//editTasksServer(task, task.id)}
