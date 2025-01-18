import React from 'react';

import Card from 'components/card';

import { ICatList } from '../model/types';

import styles from './CatList.module.scss';

const CatList: React.FC<ICatList> = ({ catList }) => {
  const list = catList.map((catData) => <Card key={catData.id} catData={catData} />);

  return <div className={styles.list}>{list}</div>;
};

export default CatList;
