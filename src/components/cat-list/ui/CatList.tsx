import React from 'react';

import Card from 'components/card';

import { ICatList } from '../model/types';

import styles from './CatList.module.scss';

const CatList: React.FC<ICatList> = ({ catList, onRemove }) => {
  const list = catList.map(({ id, imageUrl }) => <Card key={id} id={id} imageUrl={imageUrl} onRemove={onRemove} />);

  return <div className={styles.list}>{list}</div>;
};

export default CatList;
