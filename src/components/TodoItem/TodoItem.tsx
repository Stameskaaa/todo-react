import styles from './todoItem.module.css';
import { TaskState, activeListName, TaskList } from '../../types/types';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  id: string;
  text: string;
  state: TaskState;
  activeList: activeListName;
  setList: Dispatch<SetStateAction<TaskList>>;
}

export const TodoItem: React.FC<Props> = ({ id, text, state, setList }) => {
  function changeTaskState() {
    setList((prevList) =>
      prevList.map((list) => {
        if (list.id === id) {
          if (list.state === 'completed') {
            return { ...list, state: 'active' };
          } else {
            return { ...list, state: 'completed' };
          }
        }
        return list;
      }),
    );
  }

  return (
    <div className={styles.container}>
      <input
        onChange={changeTaskState}
        checked={state === 'active' ? false : true}
        type="checkbox"
        id={`${id}`}
      />
      <label className={styles.checkbox_label} htmlFor={`${id}`}>
        <div className={styles.checkbox_wrapper}>
          <div className={styles.checkbox_circle} />
        </div>

        <div className={styles.content}>
          {' '}
          <div className={styles.cross_out}></div>
          {text}
        </div>
      </label>
    </div>
  );
};
