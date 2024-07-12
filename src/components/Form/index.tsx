import React, { useState } from "react";
import Button from "../Button";
import style from './Form.module.scss';
import { ITask } from "../../types/ITask";
import { v4 as uuid } from 'uuid';

interface IProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function Form({ setTasks }: IProps) {

  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00:00");

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTasks(prevTasks => [
        ...prevTasks,
        {
          task,
          time,
          selected: false,
          completed: false,
          id: uuid()
        }
      ]
    );
    setTask("");
    setTime("00:00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={event => setTask(event.target.value)}
          id="task"
          placeholder="O que você vai estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={event => setTime(event.target.value)}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button
        type="submit"
      >
        Adicionar
      </Button>
    </form>
  );
}