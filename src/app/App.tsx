import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import 'styles/styles.scss';

import Header from './pages/header/ui/Header';
import MainPage from './pages/main-page';
import FavoritesPage from './pages/favorites-page';

import { ROUTES } from 'config/routes';

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.main()} element={<Main />}>
          <Route index element={<MainPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.main()} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
