import classNames from 'classnames';
import React from 'react';

import errorImage from 'assets/icons/error.svg';

import styles from './Error.module.scss';

import { IError } from '../model/types';

const Error: React.FC<IError> = ({ errorMessage }) => {
  const errorClass = classNames(styles.error);

  return (
    <div className={errorClass}>
      <img className={styles.error__image} src={errorImage} alt="error icon" />

      <div className={styles.error__title}>Oops... Something went wrong...</div>
      <div className={styles.error__subtitle}>
        Error: <b>{errorMessage}</b>
      </div>
    </div>
  );
};

export default Error;
