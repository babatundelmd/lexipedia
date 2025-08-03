import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineSearch } from 'react-icons/md';

import ROUTES from '../routes';

const History = () => {
  const { HOME, WORD_INFO } = ROUTES;

  const cachedWords: string[] = useMemo(() => {
    const wordInfos: Record<string, WordInfo> = JSON.parse(sessionStorage.getItem('words') ?? '{}');
    return Object.keys(wordInfos);
  }, []);

  return (
    <div className='px-8 py-8'>
      <h1 className='text-primary text-5xl font-semibold'>History</h1>
      <p className='text-secondary text-xl mt-1.5'>Your recently searched words</p>

      <section
        className={`flex flex-col gap-2.5 h-[calc(100vh-250px)] items-center justify-center ${
          cachedWords.length && 'hidden'
        }`}
      >
        <p hidden={cachedWords.length !== 0} className='text-xl'>
          No words searched
        </p>
        <Link to={HOME} className='btn'>
          Make new search
          <MdOutlineSearch />
        </Link>
      </section>

      <section className='mt-8 flex flex-wrap gap-3.5'>
        {cachedWords.map(word => (
          <Link
            key={word}
            to={WORD_INFO.replace(':word', word)}
            className='text-primary shrink-0 grow rounded px-4 py-5 whitespace-nowrap overflow-hidden text-ellipsis bg-white min-w-25 max-w-full h-16 border border-[rgba(0,0,0,0.15)] shadow-md text-center duration-400 hover:scale-103'
          >
            {word}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default History;
