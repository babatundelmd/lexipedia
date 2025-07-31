import React, {useState} from "react";

type Props = {
    onSearch: (query: string) => void;
};

const SearchBar: React.FC<Props> = ({onSearch}) =>{
    const [input, setInput] = useState('');

   const handleSubmit = () => {
    if (!input.trim()) return;
    onSearch(input.trim());
  };

    return (
        
      <div className="w-full max-w-md flex flex-col items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a word..."
          className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 rounded-md"
        >
          Search
        </button>
      </div>    
    
    )
};

export default SearchBar;