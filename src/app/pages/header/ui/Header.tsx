import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import { ROUTES } from 'config/routes';
import { getCurrentPage } from 'utils/helpers';

import styles from './Header.module.scss';

const Header = () => {
  const location = useLocation();
  const currentPage = getCurrentPage(location.pathname);

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__nav}>
          <Link to={ROUTES.main()}>
            <button
              className={classNames(styles.header__button, {
                [styles.header__button_active]: currentPage === 'main',
              })}
            >
              Все котики
            </button>
          </Link>

          <Link to={ROUTES.favorites()}>
            <button
              className={classNames(styles.header__button, {
                [styles.header__button_active]: currentPage === 'favorites',
              })}
            >
              Любимые котики
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
