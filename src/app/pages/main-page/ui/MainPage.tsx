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
  const [isLoadingMore, setLoadingMore] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [hasError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [catsList, setCatsList] = useState<ICatData[]>([]);
  const [page, setPage] = useState(1);

  const catService = new CatService();

  useEffect(() => {
    setLoading(true);
    onRequest(page);
  }, []);

  useEffect(() => {
    if (!isFirstLoad) {
      setLoadingMore(true);
      onRequest(page);
    }
  }, [page]);

  const onRequest = (page: number) => {
    console.log('request');

    if (APP_MODE === 'prod') {
      catService.getCats(page).then(onCatListLoaded).catch(onError);
    }

    if (APP_MODE === 'dev') {
      // Imitate data loading process
      setTimeout(() => {
        const rawTestData = getTestCatData(page);
        const catData = catService._transfrormRawCatData(rawTestData);

        onCatListLoaded(catData);
      }, 2000);
    }
  };

  const onCatListLoaded = (catListData: ICatData[]) => {
    if (isFirstLoad) {
      setCatsList(catListData);
      setIsFirstLoad(false);
    } else {
      setCatsList((prevCats) => [...prevCats, ...catListData]);
    }

    setLoading(false);
    setLoadingMore(false);
  };

  const onError = (error: Error) => {
    setError(true);
    setErrorMessage(error.message);
    setLoadingMore(false);
    setLoading(false);
  };

  const loadMoreCats = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const error = hasError ? <Error errorMessage={errorMessage} /> : null;
  const loader = isLoading ? <Loader /> : null;
  const content = !isLoading && !hasError && (
    <CatList catList={catsList} isLoading={isLoadingMore} onLoadMore={loadMoreCats} />
  );

  return (
    <div
      className={classNames('container', styles.mainPage, {
        [styles.mainPage_centered]: isLoading || hasError || !catsList.length,
      })}
    >
      {error}
      {loader}
      {content}
    </div>
  );
};

export default MainPage;
