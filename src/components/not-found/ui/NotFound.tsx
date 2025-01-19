import notFoundImage from 'assets/not-found.jpg';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <img className={styles.notFound__image} src={notFoundImage} alt="cat with question marks" />
      <div className={styles.notFound__text}>Упс... Здесь ничего нет...</div>
    </div>
  );
};

export default NotFound;
