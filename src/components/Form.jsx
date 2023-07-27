import { useEffect, useRef, useState } from "react";
import CardList from "./CardList";
import Card from "./Card";
const Form = () => {
  const [tasks, setTasks] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const taskArray = Object.values(tasks);

  const Completed = taskArray?.reduce((count, task) => {
    return count + (task.status === 1 ? 1 : 0);
  }, 0);

  const total = taskArray?.reduce((count, task) => {
    return count + 1;
  }, 0);
  const left = ()=>{
    if(Completed && total){
      return total-Completed;
    }
  }
  const addTask = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      description: description,
      status: 0,
    };
    setTasks((prevTask) => {
      return {
        ...prevTask,
        [task.id]: task,
      };
    });
  };
  const reset = () => {
    setTasks({});
  };
  return (
    <>
      <div>
        <form className="py-4" onSubmit={addTask}>
          <div className="container">
            <div className="row">
              <div className="col-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Task Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onClick={() => setTitle("")}
                />
              </div>
              <div className="col-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Task Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  onClick={() => setDescription("")}
                />
              </div>

              <div className="col-2">
                <button type="submit" className="btn btn-primary">
                  Add Task
                </button>
                <button
                  type="button"
                  className="btn btn-danger ms-1"
                  onClick={reset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="container">
        <div className="d-flex mt-1 justify-content-between">
          <h3>All Tasks</h3>
          <div className="d-flex gap-1">
            <button type="button" className="btn btn-secondary">
              Total{" "}
              <span className="badge text-bg-danger">
                {total == 0 ? "" : total}
              </span>
            </button>
            <button type="button" className="btn btn-success">
              Completed
              <span className="badge text-bg-danger">
                {Completed == 0 ? "" : Completed}
              </span>
            </button>
            <button type="button" className="btn btn-warning">
              Left <span className="badge text-bg-danger">{left()===0?"":left()}</span>
            </button>
          </div>
        </div>
        <div className="row p-3 g-3">
          <Card tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </>
  );
};

export default Form;
