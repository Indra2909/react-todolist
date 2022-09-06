import "./styles/style.scss";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  // List of Tasks
  const [listTasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      description: "Description.",
      day: "Feb 1st",
      state: "important",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      description: "Description description.",
      day: "Feb 2nd",
      state: "not important",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      description: "Description description description.",
      day: "Feb 3rd",
      state: "neutral",
      reminder: false,
    },
    {
      id: 4,
      text: "Pick up Laundry",
      description: "Description description description description.",
      day: "Feb 4th",
      state: "neutral",
      reminder: false,
    },
  ]);

  // Add Task Local
  const addTaskLocal = (task) => {
    const id = listTasks[listTasks.length - 1].id + 1;
    let description = "Description";

    for (let i = 1; i < id; i++) {
      description = description + " description";
    }

    description += ".";

    const newTask = { id, description, ...task };
    setTasks([...listTasks, newTask]);

    console.log(listTasks);
  };

  // Delete Task Local
  const deleteTaskLocal = (id) => {
    setTasks(listTasks.filter((task) => task.id !== id));
  };

  //Edit Task Local
  const editTaskLocal = (editTask, id) => {
    setTasks(
      listTasks.map((task) => task.id === id ? { ...task, ...editTask} : task)
    );
  };

  return (
    <div>
      <div className="toDoList">
        <Header
          addTaskOnClick={() => setShowAddTask(!showAddTask)}
          showHideStyle={showAddTask}
        />

        {showAddTask && <AddTask onAdd={addTaskLocal} />}

        {listTasks.length > 0 ? (
          <Tasks
            listTasks={listTasks}
            deleteTasksServer={deleteTaskLocal}
            editTasksServer={editTaskLocal}
            showEditForm={() => setShowEditForm(!showEditForm)}
          />
        ) : (
          "No Tasks To Show !"
        )}
      </div>
    </div>
  );
}

export default App;
