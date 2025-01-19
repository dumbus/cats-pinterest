import React from 'react';

import Button from 'components/button';
import Card from 'components/card';
import NotFound from 'components/not-found';

import { ICatList } from '../model/types';

import styles from './CatList.module.scss';
import classNames from 'classnames';

const CatList: React.FC<ICatList> = ({ catList, renderButton = false, onRemove }) => {
  const list = catList.map(({ id, imageUrl }) => <Card key={id} id={id} imageUrl={imageUrl} onRemove={onRemove} />);

  const isEmpty = list.length <= 0;

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.wrapper_withFooter]: renderButton,
      })}
    >
      <div className={styles.list}>{list}</div>

      {isEmpty && <NotFound />}
      {!isEmpty && renderButton && <Button buttonText="Загрузить ещё котиков" />}
    </div>
  );
};

export default CatList;
