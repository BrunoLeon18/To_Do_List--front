import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hook/useFetch";
import Card from "./components/Card";
import FormTodo from "./components/FormTodo";
import Loading from "./components/Loading";

function App() {
  const [updateInfo, setUpdateInfo] = useState();
  const [isClose, setIsClose] = useState(true);

  const [tasks, getAllTask, createTask, deleteTask, updateTask, loading] = useFetch(setIsClose);

  useEffect(() => {
    getAllTask("/todos");
  }, []);

  const handleCloseForm = () => {
    setIsClose(!isClose);
  };

  return (
    <div className="wrapper">
      <header className="header">
        <h1 className="title">To Do List</h1>
        <span>{tasks?.length} tasks</span>
        <button onClick={handleCloseForm} className="add__task">
          Add task
        </button>
      </header>
      <FormTodo
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
        createTask={createTask}
        updateTask={updateTask}
        isClose={isClose}
        setIsClose={setIsClose}
      />
      <div className="card__content">
        {loading && <Loading/>}
        {tasks?.map((task) => (
          <Card
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            setUpdateInfo={setUpdateInfo}
            updateTask={updateTask}
            setIsClose={setIsClose}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
