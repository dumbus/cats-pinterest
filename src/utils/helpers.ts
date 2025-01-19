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
