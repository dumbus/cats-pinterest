import { useEffect, useState } from 'react';

import styles from './MainPage.module.scss';

import CatList from './cat-list';

import CatService from 'services/CatService';
import { ICatData } from 'types/entities';

import { APP_MODE } from 'config/appConfig';
import { getTestCatData } from 'utils/getTestCatData';

// TODO: add Error component
// TODO: add Spinner component
const MainPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [catsList, setCatsList] = useState<ICatData[]>([]);

  const catService = new CatService();

  useEffect(() => {
    setLoading(true);
    onRequest();
  }, []);

  const onRequest = () => {
    if (APP_MODE === 'prod') {
      catService.getCats().then(onCatListLoaded).catch(onError);
    }

    if (APP_MODE === 'dev') {
      const rawTestData = getTestCatData();
      const catData = catService._transfrormPaginatedCatsData(rawTestData);

      onCatListLoaded(catData);
    }
  };

  const onCatListLoaded = (catListData: ICatData[]) => {
    setCatsList(catListData);
    setLoading(false);
  };

  const onError = (error: Error) => {
    console.log(error);

    setError(true);
    setLoading(false);
  };

  return (
    <div className="container">
      <CatList catList={catsList} />
    </div>
  );
};

export default MainPage;
