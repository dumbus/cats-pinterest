import React, { createContext, useEffect, useContext, useState } from 'react';

import { getInitialFavorites } from 'utils/helpers';

interface FavoritesContextValue {
  favoriteIds: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export const useFavorites = (): FavoritesContextValue => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
};

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(getInitialFavorites);

  useEffect(() => {
    console.log('new favorites', favoriteIds);

    localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const addFavorite = (id: string) => {
    setFavoriteIds((prevFavoriteIds) => [...prevFavoriteIds, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteIds((prevFavoriteIds) => prevFavoriteIds.filter((favoriteId) => favoriteId !== id));
  };

  const isFavorite = (id: string): boolean => {
    return favoriteIds.includes(id);
  };

  return (
    <FavoritesContext.Provider value={{ favoriteIds, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
