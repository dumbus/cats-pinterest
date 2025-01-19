import React from 'react';
import styles from './Button.module.scss';

import Loader from 'components/loader';

import { IButton } from '../model/types';

const Button: React.FC<IButton> = ({ buttonText, isLoading = false }) => {
  return (
    <button disabled={isLoading} className={styles.button}>
      {isLoading && <Loader color="white" size="s" />}

      <div className={styles.button__text}>{buttonText}</div>
    </button>
  );
};

export default Button;
