import { useNavigate } from 'react-router-dom';

import ROUTES from '../routes';
import SearchBar from '../components/SearchBar';

const Search: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    const path = ROUTES.WORD_INFO.replace(':word', encodeURIComponent(query));
    navigate(path);
  };

  return (
    <div className='h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4'>
      <h1 className='text-4xl font-semibold font-serif mb-6'>📘 LEXIPEDIA</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default Search;
