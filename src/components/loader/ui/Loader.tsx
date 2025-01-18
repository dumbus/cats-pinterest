import classNames from 'classnames';
import React from 'react';

import styles from './Loader.module.scss';

import { ILoader } from '../model/types';

const Loader: React.FC<ILoader> = ({ size = 'm' }) => {
  const containerClassName = classNames(styles.loader__container, {
    [styles.loader__container_m]: size === 'm',
    [styles.loader__container_s]: size === 's',
  });

  const circleClassName = classNames(styles.loader__circle, {
    [styles.loader__circle_m]: size === 'm',
    [styles.loader__circle_s]: size === 's',
  });

  return (
    <div className={containerClassName}>
      <div className={circleClassName} />
    </div>
  );
};

export default Loader;
