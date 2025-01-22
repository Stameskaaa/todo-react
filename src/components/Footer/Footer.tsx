import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <span>2 items left</span>

      <div className={styles.container_button}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>

      <button>Clear completed</button>
    </footer>
  );
};
