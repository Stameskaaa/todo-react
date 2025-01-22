import styles from './todoItem.module.css';

interface Props {
  id: number;
  text: string;
}

export const TodoItem: React.FC<Props> = ({ id, text }) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" id={`${id}`} />
      <label className={styles.checkbox_label} htmlFor={`${id}`}>
        <div className={styles.checkbox_wrapper}>
          <div className={styles.checkbox_circle} />
        </div>
        <span>{text}</span>
      </label>
    </div>
  );
};
