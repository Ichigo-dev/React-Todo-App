import React, { useState } from "react";

type Task = {
  name: string,
  description: string
}

const tasks_data: Task[] = [
  {
    name: "タスク1",
    description: "1つ目です。",
  },
  {
    name: "タスク2",
    description: "2つ目です。",
  },
  ]


const TaskPage = () => {
  const [tasks, setTasks] = useState(tasks_data);
  const [task, setTask] = useState('')

  const handleNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
    }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (task === '') return
    setTasks([...tasks, { name: task, description: "指定なし" }])
    setTask("")
    }

  const handleDeleteTask = (index: number) => {
      const tmp = [...tasks]
      tmp.splice(index, 1)
      setTasks(tmp)
    }

  const handleUpdateTask = (e: any, index: number) => {
      var tmp = [...tasks]
      tmp[index].name = e.target.value
      setTasks(tmp)
    }

  return (
      <div>
      <h1>タスク一覧</h1>
      <form onSubmit={ handleSubmit }>
        Add: <input value={ task } onChange={ (e) => handleNewTask(e)}/>
      </form>
      <ul>
        { tasks.map((task, index) => (
          <p key={ index }>
            <input key={ index } value={ task.name } onChange={ (e) => handleUpdateTask(e, index)}/>
            <button key={ index } onClick={() => handleDeleteTask(index)}>削除</button>
          </p>
          ))
        }
      </ul>
      <a href="/" >Home</a>
      </div>
      )
};

export default TaskPage;
