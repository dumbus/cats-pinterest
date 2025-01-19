import classNames from 'classnames';
import React from 'react';

import { ILoader } from '../model/types';

import styles from './Loader.module.scss';

const Loader: React.FC<ILoader> = ({ size = 'm', color = 'primary' }) => {
  const containerClassName = classNames(styles.loader__container, {
    [styles.loader__container_m]: size === 'm',
    [styles.loader__container_s]: size === 's',
  });

  const circleClassName = classNames(styles.loader__circle, {
    [styles.loader__circle_m]: size === 'm',
    [styles.loader__circle_s]: size === 's',
    [styles.loader__circle_primary]: color === 'primary',
    [styles.loader__circle_white]: color === 'white',
  });

  return (
    <div className={containerClassName}>
      <div className={circleClassName} />
    </div>
  );
};

export default Loader;
