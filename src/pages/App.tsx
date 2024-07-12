import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import Cronometer from '../components/Cronometer';
import { ITask } from '../types/ITask';

function App() {

  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [ selected, setSelected ] = useState<ITask>();

  function selectTask(selectedTask: ITask){
    setSelected(selectedTask);

    setTasks(prevTasks => prevTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false,
    })));
  }

  function completeTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(prevTasks => prevTasks.map(task => {
        if (task.id === selected.id) {
            return {
              ...task,
              completed: true,
              selected: false,
            }
          }
          return task;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectedTask={selectTask}
      />
      <Cronometer
        selected={selected}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;
