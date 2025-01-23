import { TodoItem } from '../TodoItem/TodoItem';
import styles from './todoList.module.css';
import { TaskList } from '../../types/types';
import { activeListName } from '../../types/types';
import { AddTaskIcon } from '../../icons/AddTaskIcon';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  taskList: TaskList;
  activeList: activeListName;
  setList: Dispatch<SetStateAction<TaskList>>;
}

export const TodoList: React.FC<Props> = ({ taskList, activeList, setList }) => {
  function getFilteredTasks() {
    if (activeList === 'all') return taskList;
    return taskList.filter((task) => task.state === activeList);
  }

  const filteredTasks = getFilteredTasks();

  return (
    <div className={styles.container}>
      {filteredTasks.length === 0 ? (
        <div className={styles.notification}>
          Add task here! <AddTaskIcon />
        </div>
      ) : (
        filteredTasks.map((task, index) => (
          <TodoItem
            setList={setList}
            activeList={activeList}
            state={task.state}
            key={index}
            text={task.text}
            id={task.id}
          />
        ))
      )}
    </div>
  );
};
