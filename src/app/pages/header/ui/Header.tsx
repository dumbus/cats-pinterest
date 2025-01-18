import classNames from 'classnames';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__nav}>
          <button className={classNames(styles.header__button, styles.header__button_active)}>Все котики</button>
          <button className={styles.header__button}>Любимые котики</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
