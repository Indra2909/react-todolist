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
  //let categories = [];

  const [filterCategories, setFilterCategories] = useState([]);

  const showByCategories = (category) => {
    let categories = [...filterCategories];

    if (categories.includes(category)) {
      // console.log("exists");
      categories = categories.filter((x) => x !== category);
    } else {
      // console.log("not exists");
      categories.push(category);
    }

    setFilterCategories(categories);
  };

  useEffect(() => {}, [filterCategories]);

  return (
    <div>
      <h2>List: </h2>
      <div className="categories">
        {/* className={`singletask ${singleTask.reminder ? "reminder" : ""}`} */}
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

// className={`singletask ${singleTask.reminder ? "reminder" : ""}`}

{
  /* <div
  className={`singletask ${singleTask.reminder ? "reminder" : ""}`}
  onDoubleClick={() => onToggle(singleTask.id)}
></div>; */
}

// const todos = [
//   {
//     id: 1,
//     text: "Take out trash",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Meeting with boss",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Dentist appt",
//     isCompleted: false,
//   },
// ];

// //console.log(todos);

// const filterData = [1, 2];

// const data =
//       todos
// .filter((todo) => filterData.includes(todo.id))
// .map((todo) => todo.text);

// console.log(data);

// // var arr1 = [1,2,3,4],
// //     arr2 = [2,4],
// //     res = arr1.filter(item => !arr2.includes(item));
// // console.log(res);
