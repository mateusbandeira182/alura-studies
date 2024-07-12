import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/ITask";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Cronometer.module.scss";

interface IProps {
  selected: ITask | undefined,
  completeTask: () => void,
}

export default function Cronometer({ selected, completeTask }: IProps) {
  const [ time, setTime ] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
    
  }, [
    selected
  ]);

  function regressiveTime(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        regressiveTime(count - 1);
      } else {
        completeTask();
      }
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha umm card e inicio o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressiveTime(time) }>
        Iniciar
      </Button>
    </div>
  );
}