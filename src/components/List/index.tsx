import style from './List.module.scss';
import Item from "./Item";
import { ITask } from '../../types/ITask';

interface IProps {
  tasks: ITask[],
  selectedTask: (selectedTask: ITask) => void
}
 
function List({ tasks, selectedTask } : IProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map(item => (
          <Item
            selectedTask={selectedTask}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;