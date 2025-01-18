export const getInitialFavorites = (): string[] => {
  const storedFavorites = localStorage.getItem('favoriteIds');

  return storedFavorites ? JSON.parse(storedFavorites) : [];
};
