import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './Card.module.scss';

import heartActive from 'assets/icons/heart-active.svg';
import heartFilled from 'assets/icons/heart-filled.svg';
import heartOutlined from 'assets/icons/heart-outlined.svg';

import imagePlaceholder from 'assets/cat-placeholder.jpg';

import { ICard } from '../model/types';

const Card: React.FC<ICard> = ({ catData }) => {
  const [imageSrc, setImageSrc] = useState(catData.imageUrl);
  const [isLiked, setIsLiked] = useState(false);

  const handleButtonClick = () => {
    setIsLiked((prev) => !prev);
  };

  const handleImageError = () => {
    setImageSrc(imagePlaceholder);
  };

  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={imageSrc} alt="image of cat" onError={handleImageError} />

      <button className={classnames(styles.card__button)} onClick={handleButtonClick}>
        <img
          className={classnames(styles.card__heart, styles.card__heartDefault, {
            [styles.card__heart_visible]: !isLiked,
          })}
          src={heartOutlined}
          alt="outlined heart icon"
        />

        <img
          className={classnames(styles.card__heart, styles.card__heartFilled, {
            [styles.card__heart_visible]: isLiked,
          })}
          src={heartFilled}
          alt="filled heart icon"
        />

        <img
          className={classnames(styles.card__heart, styles.card__heartActive)}
          src={heartActive}
          alt="active heart icon"
        />
      </button>
    </div>
  );
};

export default Card;
