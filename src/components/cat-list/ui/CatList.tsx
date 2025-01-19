import React from 'react';

import Card from 'components/card';
import NotFound from 'components/not-found';

import { ICatList } from '../model/types';

import styles from './CatList.module.scss';
import classNames from 'classnames';

const CatList: React.FC<ICatList> = ({ catList, onRemove }) => {
  const list = catList.map(({ id, imageUrl }) => <Card key={id} id={id} imageUrl={imageUrl} onRemove={onRemove} />);

  const isEmpty = !list.length;

  return (
    <div
      className={classNames(styles.list, {
        [styles.list_empty]: isEmpty,
      })}
    >
      {isEmpty ? <NotFound /> : list}
    </div>
  );
};

export default CatList;
