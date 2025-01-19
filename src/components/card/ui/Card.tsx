import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './Card.module.scss';

import heartActive from 'assets/icons/heart-active.svg';
import heartFilled from 'assets/icons/heart-filled.svg';
import heartOutlined from 'assets/icons/heart-outlined.svg';

import imagePlaceholder from 'assets/cat-placeholder.jpg';

import { useFavorites } from 'context/FavoritesContext';

import { ICard } from '../model/types';

const Card: React.FC<ICard> = ({ id, imageUrl, onRemove }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const [imageSrc, setImageSrc] = useState(imageUrl);
  const [isLiked, setIsLiked] = useState(isFavorite(id));
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleButtonClick = () => {
    setIsLiked((prev) => !prev);
    toggleFavorite();
  };

  const handleImageError = () => {
    setImageSrc(imagePlaceholder);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const toggleFavorite = () => {
    if (isFavorite(id)) {
      removeFavorite(id);

      if (onRemove) {
        onRemove(id);
      }
    } else {
      addFavorite(id);
    }
  };

  return (
    <div className={styles.card}>
      {isImageLoading && <div className={styles.card__skeleton} />}

      {/* <div className={styles.card__skeleton} /> */}
      <img
        className={classnames(styles.card__image, {
          [styles.card__image_hidden]: isImageLoading,
        })}
        src={imageSrc}
        alt="image of cat"
        onError={handleImageError}
        onLoad={handleImageLoad}
      />

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
