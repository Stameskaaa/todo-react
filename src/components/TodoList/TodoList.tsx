import { TodoItem } from '../TodoItem/TodoItem';
import styles from './todoList.module.css';

const tasksArr = ['Тестовое задание', 'Прекрасный код', 'Покрытие тестами'];

export const TodoList = () => {
  return (
    <div className={styles.container}>
      {tasksArr.map((task, index) => (
        <TodoItem text={task} id={index} />
      ))}
    </div>
  );
};
