import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [state, setState] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task !");
      return;
    }

    onAdd({ text, day, reminder, state });

    setText("hello");
    setDay("");
    setReminder(false);
    setState("");

  };
  
  return (
    <div>
      <h2>Add Task</h2>
      <form className="addTask-form" onSubmit={onSubmit}>
        <div className="addTask-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="addTask-control">
          <label>Date</label>
          <input
            type="text"
            placeholder="Add (MM/DD)"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="addTask-control checkboxGroup">
          <label>Set Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <div className="addTask-control radioGroup">
          <label className="title">State</label>
          <div className="halfContainer"
            onChange={(e) => setState(e.target.value)}
            value={state}
          >
            <div className="radioLabelGroup">
              <input
                type="radio"
                name="state"
                value="important"
                checked={state == "important"}
                readOnly
              />
              <label>Important</label>
            </div>
            <div className="radioLabelGroup">
              <input
                type="radio"
                name="state"
                value="not important"
                checked={state == "not important"}
                readOnly
              />
              <label>Not Important</label>
            </div>
            <div className="radioLabelGroup">
              <input
                type="radio"
                name="state"
                value="neutral"
                checked={state == "neutral"}
                readOnly
              />
              <label>Neutral</label>
            </div>
          </div>
        </div>

        <input type="submit" value="Save Task" className="btnForm" />
      </form>
    </div>
  );
};

export default AddTask;
