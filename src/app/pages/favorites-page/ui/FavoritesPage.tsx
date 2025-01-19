import { useEffect, useState } from 'react';
import classNames from 'classnames';

// const tmpFavs = ['ebv', '0XYvRd7oD'];

import Error from 'components/error';
import Loader from 'components/loader';
import CatList from 'components/cat-list';

import { APP_MODE } from 'config/appConfig';

import CatService from 'services/CatService';
import { useFavorites } from 'context/FavoritesContext';

import { ICatData } from 'types/entities';

import styles from './FavoritesPage.module.scss';
import { getTestFavoritesData } from 'utils/getTestData';

const FavoritesPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [favoritesList, setFavoritesList] = useState<ICatData[]>([]);

  const catService = new CatService();
  const { favoriteIds } = useFavorites();

  useEffect(() => {
    setLoading(true);
    onRequest(favoriteIds);
  }, []);

  const onRequest = (favoriteIds: string[]) => {
    if (APP_MODE === 'prod') {
      catService.getFavoriteCats(favoriteIds).then(onFavoritesListLoaded).catch(onError);
    }

    if (APP_MODE === 'dev') {
      // Imitate data loading process
      setTimeout(() => {
        const rawTestData = getTestFavoritesData(favoriteIds);
        const catData = catService._transfrormRawCatData(rawTestData);

        onFavoritesListLoaded(catData);
      }, 2000);
    }
  };

  const onFavoritesListLoaded = (favoritesListData: ICatData[]) => {
    setFavoritesList(favoritesListData);
    setLoading(false);
  };

  const onError = (error: Error) => {
    setError(true);
    setErrorMessage(error.message);
    setLoading(false);
  };

  const handleRemoveFavorite = (id: string) => {
    setFavoritesList((prevList) => prevList.filter((cat) => cat.id !== id));
  };

  const error = hasError ? <Error errorMessage={errorMessage} /> : null;
  const loader = isLoading ? <Loader /> : null;
  const content = !isLoading && !hasError && <CatList catList={favoritesList} onRemove={handleRemoveFavorite} />;

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
