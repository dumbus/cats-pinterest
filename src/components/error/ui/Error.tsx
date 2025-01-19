import classNames from 'classnames';
import React from 'react';

import errorImage from 'assets/icons/error.svg';

import { IError } from '../model/types';

import styles from './Error.module.scss';

const Error: React.FC<IError> = ({ errorMessage }) => {
  const errorClass = classNames(styles.error);

  return (
    <div className={errorClass}>
      <img className={styles.error__image} src={errorImage} alt="error icon" />

      <div className={classNames(styles.error__text, styles.error__title)}>Ой... Что-то пошло не так...</div>

      {errorMessage.length ? (
        <div className={classNames(styles.error__text, styles.error__subtitle)}>
          Ошибка: <b>{errorMessage}</b>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Error;
