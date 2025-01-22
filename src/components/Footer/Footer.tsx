import styles from './footer.module.css';
import { activeListName, TaskList } from '../../types/types';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  activeList: activeListName;
  setActiveList: Dispatch<SetStateAction<activeListName>>;
  list: TaskList;
  setList: Dispatch<SetStateAction<TaskList>>;
}

const butts = ['All', 'Active', 'Completed'];

export const Footer: React.FC<Props> = ({ setActiveList, activeList, list, setList }) => {
  function handleChangeActiveList(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target as HTMLElement;

    if (target.tagName === 'BUTTON') {
      if (target.textContent === 'All') setActiveList('all');
      if (target.textContent === 'Active') setActiveList('active');
      if (target.textContent === 'Completed') setActiveList('completed');
    }
  }

  function clearCompleted() {
    setList((prevList) => prevList.filter((task) => task.state === 'active'));
  }

  return (
    <footer className={styles.container}>
      <span>{list.filter((task) => task.state === 'active')?.length} items left</span>

      <div onClick={handleChangeActiveList} className={styles.container_button}>
        {butts.map((butt) => (
          <button
            className={`${activeList === butt.toLowerCase() ? styles.active : null}`}
            key={butt}>
            {butt}
          </button>
        ))}
      </div>

      <button onClick={clearCompleted}>Clear completed</button>
    </footer>
  );
};
