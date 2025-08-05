import { useRef, useState } from 'react';

import { showAlert } from '../utils';

type Props = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log('SearchBar clicked:', input);
    if (!input.trim()) {
      inputRef.current?.focus();
      showAlert({ msg: 'Please enter a search term', bgColor: '#c00' });
      return;
    }
    onSearch(input.trim());
  };

  return (
    <form className='w-full max-w-md flex flex-col items-center' onSubmit={handleSubmit}>
      <input
        autoFocus
        type='text'
        value={input}
        ref={inputRef}
        onChange={e => setInput(e.target.value)}
        placeholder='Enter a word...'
        className='w-full p-3 mb-4 border border-[rgba(0,0,0,0.1)] shadow-md !text-black bg-amber-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <button
        type='submit'
        className='w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 rounded-md'
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
