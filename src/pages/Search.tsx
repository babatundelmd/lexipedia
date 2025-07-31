// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import  ROUTES  from 'routes';
// import SearchBar from '../components/SearchBar'



// const Search: React.FC = () => {
//   const [query, setQuery] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (!query.trim()) return;
//      const path = ROUTES.WORD_INFO.replace(':word', encodeURIComponent(query.trim()));
//     navigate(path);
//   };


//   return (
//    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
//       <h1 className="text-4xl font-bold mb-6 text-center">📘 LEXIPEDIA</h1>
//        <SearchBar onSearch={handleSearch} />
//     </div>
   
//   );
// };

// export default Search;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import   ROUTES  from 'routes'; 
import SearchBar from '../components/SearchBar';

const Search: React.FC = () => {
  const navigate = useNavigate();

   const handleSearch = (query: string) => {
    const path = ROUTES.WORD_INFO.replace(':word', encodeURIComponent(query));
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6">📘 LEXIPEDIA</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default Search;

