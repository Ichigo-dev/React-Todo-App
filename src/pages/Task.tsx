import React from 'react';

type Props = {
    name: string
  }

const Task = (props: Props) => {
  return (
    <div>
      <h1>タスク一覧</h1>
      <p>{props.name}</p>
    </div>
  )
};

export default Task;
