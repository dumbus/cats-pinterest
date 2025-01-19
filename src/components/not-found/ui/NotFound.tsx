import { Link } from 'react-router-dom';

import notFoundImage from 'assets/not-found.jpg';

import Button from 'components/button';

import { ROUTES } from 'config/routes';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <img className={styles.notFound__image} src={notFoundImage} alt="cat with question marks" />
      <div className={styles.notFound__text}>Упс... На этой странице ничего нет...</div>

      <Link to={ROUTES.main()}>
        <Button buttonText="Вернуться на главную" />
      </Link>
    </div>
  );
};

export default NotFound;
