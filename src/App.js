import "./styles/style.scss";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const dataJSON = "http://localhost:5000/tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  // List of Tasks
  const [listTasks, setTasks] = useState([]);

  const [listTasks2, setTasks2] = useState([
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
      state: " not important",
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

  // UseEffect (in order to the load data [from the server] when the app.js page load, we're going to use a hooks called useEffect. It's often used for a situation when you want something to happen right when the page loads)
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(dataJSON);
    const data = await res.json();

    return data;
  };

  // Fetch Single Tasks
  const fetchSingleTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

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

  // Add Task Local
  const addTaskServer = async (task) => {
    // console.log(task);
    // task.description = "test";

    // Add description
    const id = listTasks[listTasks.length - 1].id + 1;
    let description = "Description";
    for (let i = 1; i < id; i++) {
      description = description + " description";
    }
    description += ".";

    task.description = description;

    const res = await fetch(dataJSON, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...listTasks, data]);
  };

  // Delete Task Local
  const deleteTaskLocal = (id) => {
    setTasks(listTasks.filter((task) => task.id !== id));
  };

  // Delete Task Server
  const deleteTaskServer = async (id) => {
    await fetch(`${dataJSON}/${id}`, {
      method: "DELETE",
    });

    setTasks(listTasks.filter((task) => task.id !== id));
  };

  //Edit Task Server
  const editTaskServer = async (editTask, id) => {
    // editTask = [
    //   {
    //     id: "1",
    //     text: "Doctors Appointment 2",
    //     description: "Description.",
    //     day: "Feb 1st",
    //     state: "important",
    //     reminder: true,
    //   },
    // ];

    const taskToEdit = await fetchSingleTask(id);
    const updatedTask = { ...taskToEdit, ...editTask };

    const res = await fetch(`${dataJSON}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      listTasks.map((task) => (task.id === id ? { ...task, ...data } : task))
    );
  };



  return (
    <div>
      <div className="toDoList">
        <Header
          addTaskOnClick={() => setShowAddTask(!showAddTask)}
          showHideStyle={showAddTask}
        />

        {showAddTask && <AddTask onAdd={addTaskServer} />}

        {listTasks.length > 0 ? (
          <Tasks
            listTasks={listTasks}
            deleteTasksServer={deleteTaskServer}
            editTasksServer={editTaskServer}
            showEditForm={() => setShowEditForm(!showEditForm)}
            // showByCategories={showByCategories}
          />
        ) : (
          "No Tasks To Show !"
        )}
      </div>
    </div>
  );
}

export default App;
