import React from "react";
import { useState, useEffect } from "react";
import Task from "./Task";

const important = "important";
const notImportant = "not important";
const neutral = "neutral";

const Tasks = ({
  listTasks,
  deleteTasksServer,
  editTasksServer,
  showEditForm,
}) => {

  const [filterCategories, setFilterCategories] = useState([]);

  const showByCategories = (category) => {
    let categories = [...filterCategories];

    if (categories.includes(category)) {
      categories = categories.filter((x) => x !== category);
    } else {
      categories.push(category);
    }

    setFilterCategories(categories);
  };

  useEffect(() => {}, [filterCategories]);

  return (
    <div>
      <h2>List: </h2>
      <div className="categories">
        <div
          className={`important${
            filterCategories.includes("important") ? "-active" : ""
          }`}
          onClick={() => showByCategories(important)}
        >
          <p className="darkRed"></p>
          <p>Important</p>
        </div>
        <div
          className={`notImportant${
            filterCategories.includes("not important") ? "-active" : ""
          }`}
          onClick={() => showByCategories(notImportant)}
        >
          <p className="darkGreen"></p>
          <p>Not Important</p>
        </div>
        <div
          className={`neutral${
            filterCategories.includes("neutral") ? "-active" : ""
          }`}
          onClick={() => showByCategories(neutral)}
        >
          <p className="darkBlue"></p>
          <p>Neutral</p>
        </div>
      </div>

      <div className="listTask">
        {filterCategories.length < 1
          ? listTasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                deleteTasksServer={deleteTasksServer}
                editTasksServer={editTasksServer}
                showEditForm={showEditForm}
              />
            ))
          : listTasks
              .filter((task) => filterCategories.includes(task.state))
              .map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  deleteTasksServer={deleteTasksServer}
                  editTasksServer={editTasksServer}
                  showEditForm={showEditForm}
                />
              ))}
      </div>
    </div>
  );
};

export default Tasks;