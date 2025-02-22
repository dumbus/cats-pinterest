import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from 'app';

import { FavoritesProvider } from 'context/FavoritesContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </StrictMode>
);
