import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineSearch } from 'react-icons/md';

import ROUTES from '../routes';
import { showAlert } from '../utils';

interface Props {
  extraClasses?: string;
}

const WordInfoSearchbar: React.FC<Props> = ({ extraClasses }) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = inputRef.current!.value.trim();
    if (!input) {
      inputRef.current?.focus();
      showAlert({ msg: 'Please enter a search term', bgColor: '#c00' });
      return;
    }

    navigate(ROUTES.WORD_INFO.replace(':word', input));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`search-bar group flex border-0 border-[rgba(0,0,0,0.15)] shadow-md w-14 h-14 rounded-full overflow-clip duration-500 hover:w-80 hover:border focus-within:w-80 focus-within:border ${extraClasses}`}
    >
      <input
        required
        type='text'
        ref={inputRef}
        placeholder='Enter a word...'
        className='px-0 w-0 h-full border-0 border-[rgba(0,0,0,0.1)] shadow-md bg-white !text-black focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-shown:bg-amber-50 duration-500 group-hover:w-full group-hover:px-4 group-hover:border group-focus-within:w-full group-focus-within:px-4 group-focus-within:border'
      />
      <button
        type='submit'
        className='outline-none flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white'
      >
        <MdOutlineSearch className='w-7 h-7' />
      </button>
    </form>
  );
};

export default WordInfoSearchbar;
