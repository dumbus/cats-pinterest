import { CARDS_PER_PAGE } from 'config/appConfig';
import { ROUTES } from 'config/routes';

export const getInitialFavorites = (): string[] => {
  const storedFavorites = localStorage.getItem('favoriteIds');

  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

export const getCurrentPage = (pathname: string): 'main' | 'favorites' | '' => {
  if (pathname === ROUTES.main()) {
    return 'main';
  }

  if (pathname === ROUTES.favorites()) {
    return 'favorites';
  }

  return '';
};

export const getHasMore = (page: number, favoriteIds: string[]) => {
  const endIndex = page * CARDS_PER_PAGE;

  const hasMore = favoriteIds.length > endIndex;

  return hasMore;
};

export const getCurrentPageData = <D>(page: number, data: D[]): D[] => {
  const startIndex = (page - 1) * CARDS_PER_PAGE;
  const endIndex = startIndex + CARDS_PER_PAGE;

  return data.slice(startIndex, endIndex);
};
