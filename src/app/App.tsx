import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import 'styles/styles.scss';

import { ROUTES } from 'config/routes';

import FavoritesPage from './pages/favorites-page';
import Header from './pages/header';
import MainPage from './pages/main-page';

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
