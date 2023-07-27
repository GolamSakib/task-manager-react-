import { useEffect } from "react";

const Card = ({ tasks,setTasks }) => {
  // Get an array of tasks from the tasks object
  const taskArray = Object.values(tasks);
  const ontoggle=(id)=>{
      const task=tasks[id];
      setTasks((prevtasks)=>(
        {
          ...prevtasks,
          [id]:{...task,status:Number(!task.status)}
        }
      ))
  }
  const deleteTask=(id)=>{
    const filteredTasks=taskArray.filter((task)=>{
       return task.id!==id;
    })
    setTasks(filteredTasks);
  }
  useEffect(()=>{
    console.log(tasks);
  },[tasks]);
  return (
    <div className="row p-3 g-3">
      {taskArray.map((task) => (
        <div className="col-sm-4" key={task.id}>
          <div className="card">
            <div className="card-header">Task ID: {task.id}</div>
            <div className="card-body">
              <h5 className={`card-title text-capitalize ${task.status===1?'text-decoration-line-through':' '}`}>{task.title}</h5>
              <p className={`card-title text-capitalize ${task.status===1?'text-decoration-line-through':' '}`}>{task.description}</p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="form-check form-check-reverse">
                  <input className="form-check-input" checked={task.completed} type="checkbox" onChange={()=>ontoggle(task.id)} />
                  <label>Complete: </label>
                </div>
                <button type="button" onClick={()=>deleteTask(task.id)} className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
