import 'styles/styles.scss';

import Header from './pages/header/ui/Header';
import MainPage from './pages/main-page';
import FavoritesPage from './pages/favorites-page';

const App = () => {
  return (
    <div>
      <Header />
      {/* <MainPage /> */}
      <FavoritesPage />
    </div>
  );
};

export default App;
