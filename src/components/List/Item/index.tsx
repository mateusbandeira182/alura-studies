import { ITask } from '../../../types/ITask';
import style from './Item.module.scss';

interface IProps extends ITask{
  selectedTask: (selectedTask: ITask) => void
}
export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  selectedTask
}: IProps) {
  return (
    <li 
      className={`${style.item} ${selected ? style
        .itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`}
      onClick={() => !completed && selectedTask({
        task,
        time,
        selected,
        completed,
        id
        })
      }
    >
      <h3>
        {task}
      </h3>
      <span>
        {time}
      </span>
      {completed && <span className={style.concluido} aria-label='Tarefa Concluída'></span>}
    </li>
  );
}