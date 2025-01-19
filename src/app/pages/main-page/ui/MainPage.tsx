import classNames from 'classnames';
import { useEffect, useState } from 'react';

import CatList from 'components/cat-list';
import Error from 'components/error';
import Loader from 'components/loader';

import { APP_MODE } from 'config/appConfig';
import CatService from 'services/CatService';
import { ICatData } from 'types/entities';
import { getTestCatData } from 'utils/getTestData';

import styles from './MainPage.module.scss';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isFirstLoad) {
      setLoadingMore(true);
      onRequest(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const onRequest = (page: number) => {
    if (APP_MODE === 'prod') {
      catService.getCats(page).then(onCatListLoaded).catch(onError);
    }

    // Оставляю логику получения тестовых данных в коде, чтобы была возможность продолжать разработку
    if (APP_MODE === 'dev') {
      // timeout имитирует процесс получения данных с сервера
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
