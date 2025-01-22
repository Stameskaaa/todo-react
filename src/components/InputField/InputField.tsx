import { ArrowIcon } from '../../icons/arrow';
import styles from './inputFiled.module.css';

export const InputField = () => {
  return (
    <div className={styles.container}>
      <button>
        {' '}
        <ArrowIcon />{' '}
      </button>
      <input placeholder="What needs to be done?" type="text" />
    </div>
  );
};
