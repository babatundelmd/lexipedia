import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ROUTES from './routes';
import MainLayout from './layouts';
import Search from './pages/Search';
import History from './pages/History';
import WordInfo from './pages/WordInfo';

const App = () => {
  const { HOME, HISTORY, WORD_INFO } = ROUTES;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={HOME} element={<Search />} />
          <Route path={HISTORY} element={<History />} />
          <Route path={WORD_INFO} element={<WordInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
