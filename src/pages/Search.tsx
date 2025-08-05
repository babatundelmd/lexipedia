import React from 'react';
import { useNavigate } from 'react-router-dom';
import   ROUTES  from '../routes'; 
import SearchBar from '../components/SearchBar';

const Search: React.FC = () => {
  const navigate = useNavigate();

   const handleSearch = (query: string) => {
    if (!query.trim()) return;
    const path = ROUTES.WORD_INFO.replace(':word', encodeURIComponent(query.trim()));
    navigate(path);
  };

  return (
    <div className="min-h-screen text-[#0a2f46] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-medium font-serif mb-6">📘 Lexipedia</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default Search;

