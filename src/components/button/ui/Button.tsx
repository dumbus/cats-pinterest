import React from 'react';

import Loader from 'components/loader';

import { IButton } from '../model/types';

import styles from './Button.module.scss';

const Button: React.FC<IButton> = ({ buttonText, isLoading = false, onClick }) => {
  return (
    <button disabled={isLoading} className={styles.button} onClick={onClick}>
      {isLoading && <Loader color="white" size="s" />}

      <div className={styles.button__text}>{buttonText}</div>
    </button>
  );
};

export default Button;
