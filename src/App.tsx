import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        {/* Optional: keep this if you want /search to also work */}
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
