import { useRef, useState } from 'react';
import styles from './inputFiled.module.css';
import { TaskList, Task } from '../../types/types';
import { Dispatch, SetStateAction } from 'react';
import { ArrowIcon } from '../../icons/ArrowIcon';

interface Props {
  setList: Dispatch<SetStateAction<TaskList>>;
}

export const InputField: React.FC<Props> = ({ setList }) => {
  const [task, setTask] = useState<Task>({ text: '', state: 'active', id: '' });
  const inputRef = useRef<HTMLInputElement>(null);

  function generateTimedID() {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substr(2, 5);
    return timestamp + randomPart;
  }

  function handleTaskInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTask((task) => ({ ...task, text: e.target.value }));
  }

  function addTask() {
    if (task.text === '') return;
    const id = generateTimedID();
    setList((list) => [...list, { ...task, id }]);
    setTask({ text: '', state: 'active', id: '' });
    if (inputRef.current) inputRef.current.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      addTask();
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={addTask}>
        <ArrowIcon />
      </button>
      <input
        ref={inputRef}
        value={task.text}
        onKeyDown={handleKeyDown}
        onChange={handleTaskInput}
        placeholder="What needs to be done?"
        type="text"
      />
    </div>
  );
};
