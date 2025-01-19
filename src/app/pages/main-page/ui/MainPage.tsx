import { useEffect, useState } from 'react';

import styles from './MainPage.module.scss';

import CatList from 'components/cat-list';
import Error from 'components/error';
import Loader from 'components/loader';

import CatService from 'services/CatService';
import { ICatData } from 'types/entities';

import { APP_MODE } from 'config/appConfig';
import { getTestCatData } from 'utils/getTestData';
import classNames from 'classnames';

const MainPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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
      // Imitate data loading process
      setTimeout(() => {
        const rawTestData = getTestCatData();
        const catData = catService._transfrormRawCatData(rawTestData);

        onCatListLoaded(catData);
      }, 2000);
    }
  };

  const onCatListLoaded = (catListData: ICatData[]) => {
    setCatsList(catListData);
    setLoading(false);
  };

  const onError = (error: Error) => {
    setError(true);
    setErrorMessage(error.message);
    setLoading(false);
  };

  const error = hasError ? <Error errorMessage={errorMessage} /> : null;
  const loader = isLoading ? <Loader /> : null;
  const content = catsList.length ? <CatList catList={catsList} /> : null;

  return (
    <div
      className={classNames('container', styles.mainPage, {
        [styles.mainPage_centered]: isLoading || hasError,
      })}
    >
      {error}
      {loader}
      {content}
    </div>
  );
};

export default MainPage;
