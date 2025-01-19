import classNames from 'classnames';
import { useEffect, useState } from 'react';

import CatList from 'components/cat-list';
import Error from 'components/error';
import Loader from 'components/loader';

import { APP_MODE } from 'config/appConfig';
import { useFavorites } from 'context/FavoritesContext';
import CatService from 'services/CatService';
import { ICatData } from 'types/entities';

import { getTestFavoritesData } from 'utils/getTestData';
import { getCurrentPageData, getHasMore } from 'utils/helpers';

import styles from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [isLoadingMore, setLoadingMore] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [hasError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [favoritesList, setFavoritesList] = useState<ICatData[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const catService = new CatService();
  const { favoriteIds } = useFavorites();

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
    const currentFavoriteIds = getCurrentPageData(page, favoriteIds);

    if (APP_MODE === 'prod') {
      catService.getFavoriteCats(currentFavoriteIds).then(onFavoritesListLoaded).catch(onError);
    }

    // Оставляю логику получения тестовых данных в коде, чтобы была возможность продолжать разработку
    if (APP_MODE === 'dev') {
      // timeout имитирует процесс получения данных с сервера
      setTimeout(() => {
        const rawTestData = getTestFavoritesData(page, favoriteIds);
        const catData = catService._transfrormRawCatData(rawTestData);

        onFavoritesListLoaded(catData);
      }, 2000);
    }
  };

  const onFavoritesListLoaded = (favoritesListData: ICatData[]) => {
    if (isFirstLoad) {
      setFavoritesList(favoritesListData);
      setIsFirstLoad(false);
    } else {
      setFavoritesList((prevFavorites) => [...prevFavorites, ...favoritesListData]);
    }

    setHasMore(getHasMore(page, favoriteIds));

    setLoading(false);
    setLoadingMore(false);
  };

  const onError = (error: Error) => {
    setError(true);
    setErrorMessage(error.message);
    setLoadingMore(false);
    setLoading(false);
  };

  const loadMoreFavorites = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleRemoveFavorite = (id: string) => {
    setFavoritesList((prevList) => prevList.filter((cat) => cat.id !== id));
  };

  const error = hasError ? <Error errorMessage={errorMessage} /> : null;
  const loader = isLoading ? <Loader /> : null;
  const content = !isLoading && !hasError && (
    <CatList
      catList={favoritesList}
      isLoading={isLoadingMore}
      onLoadMore={loadMoreFavorites}
      onRemove={handleRemoveFavorite}
      renderButton={hasMore}
    />
  );

  return (
    <div
      className={classNames('container', styles.favoritesPage, {
        [styles.favoritesPage_centered]: isLoading || hasError || !favoritesList.length,
      })}
    >
      {error}
      {loader}
      {content}
    </div>
  );
};

export default FavoritesPage;
