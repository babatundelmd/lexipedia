import axios, { AxiosError } from 'axios';
import { FaPlayCircle } from 'react-icons/fa';
import { HiSpeakerWave } from 'react-icons/hi2';
import { HiSpeakerXMark } from 'react-icons/hi2';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import ROUTES from 'routes';
import { showAlert } from 'utils';
import Lexicals from 'components/Lexicals';

const WordInfo = () => {
  const { HOME } = ROUTES;

  const { word } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [wordInfo, setWordInfo] = useState<WordInfo>();

  const specifiedPhonetics: Phonetic | null = useMemo(() => {
    if (!wordInfo) {
      return null;
    }

    const phonetics: Phonetic = { audio: '', text: '' };

    // extract `audio` and `text` from array of phonetics objects
    for (let i = 0; i < wordInfo.phonetics.length; i++) {
      // stop iterations once `audio` and `text` have been extracted
      if (phonetics.audio && phonetics.text) {
        break;
      }

      // if `audio` has not been extracted then do so
      if (!phonetics.audio && wordInfo.phonetics[i].audio) {
        phonetics.audio = wordInfo.phonetics[i].audio;
      }

      // if `text` has not been extracted then do so
      if (!phonetics.text && wordInfo.phonetics[i].text) {
        phonetics.text = wordInfo.phonetics[i].text;
      }
    }

    return phonetics;
  }, [wordInfo]);

  const [audio, setAudio] = useState(new Audio());

  const fetchWordInfo = async (word: string) => {
    // check cached words in sessionStorage
    const id = word.toLowerCase();
    const words: Record<string, WordInfo> = JSON.parse(sessionStorage.getItem('words') ?? '{}');
    const cachedWordDetails: WordInfo | undefined = words[id];

    if (cachedWordDetails) {
      // scroll to top
      window.scrollTo({ top: 0 });
      setWordInfo(cachedWordDetails);
      return;
    }

    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

      const wordDetails: WordInfo[] = response.data;
      setWordInfo(wordDetails[0]);

      // scroll to top
      window.scrollTo({ top: 0 });

      // cache word details in sessionStorage
      words[id] = wordDetails[0];
      sessionStorage.setItem('words', JSON.stringify(words));
    } catch (err) {
      const error = err as AxiosError<ErrorAPI>;
      // console.log(error.response?.data);

      showAlert({
        duration: 5000,
        msg: error.response?.data.title || 'An error has occured. Please try again',
      });
      window.history.back();
      return;
    }
  };

  useEffect(() => {
    if (word) fetchWordInfo(word);
    else navigate(HOME);
  }, [word]);

  useEffect(() => {
    if (!specifiedPhonetics) return;

    const newAudio = new Audio(specifiedPhonetics.audio);
    newAudio.onplaying = () => setIsPlaying(true);
    newAudio.onended = () => setIsPlaying(false);

    setAudio(newAudio);
  }, [specifiedPhonetics]);

  if (!wordInfo || !specifiedPhonetics) {
    // Ore's Skeleton component
    return <>Word Info Skeleton</>;
  }

  const playWordSound = () => {
    if (isPlaying) return;

    audio.play().catch(error => {
      showAlert({ msg: 'Audio Play failed! Please try again' });
      console.error('Audio play failed:', error);
    });
  };

  return (
    <div className='min-h-screen grid grid-cols-[20%_80%] grid-rows-[300px_1fr]'>
      <section className='relative px-8 h-[300px] flex items-center justify-between border-b col-start-1 col-end-3'>
        <h1 className='text-8xl px-10 capitalize'>{wordInfo.word}</h1>

        <button
          onClick={playWordSound}
          disabled={!specifiedPhonetics.audio}
          className='group relative flex gap-4 items-center justify-center py-4 px-8 rounded-full border disabled:cursor-not-allowed'
        >
          {specifiedPhonetics.audio ? null : (
            <span className='shadow-md py-2 px-4 whitespace-nowrap opacity-0 absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-full duration-300 border group-hover:opacity-100'>
              No audio available
            </span>
          )}
          {specifiedPhonetics.audio ? (
            isPlaying ? (
              <HiSpeakerWave />
            ) : (
              <FaPlayCircle />
            )
          ) : (
            <HiSpeakerXMark />
          )}
          {specifiedPhonetics.text}
        </button>

        <Link
          to={wordInfo.license.url}
          className='absolute bottom-4 right-8 text-sm text-[rgba(255,255,255,0.7)] duration-300 hover:text-white hover:underline'
        >
          {wordInfo.license.name}
        </Link>
      </section>

      {wordInfo.meanings.map(({ antonyms, definitions, partOfSpeech, synonyms }, index) => (
        <Fragment key={index}>
          <section className='border-b text-center p-10 capitalize'>{partOfSpeech}</section>

          <section className='border-x'>
            <div className='py-10 px-8 border-b'>
              <ol className='flex flex-col gap-10'>
                {definitions.map((definition, index) => (
                  <li key={index} className='list-decimal list-inside'>
                    <p className='inline text-2xl'>{definition.definition}</p>

                    <p
                      hidden={!definition.example}
                      className='mt-4 text-sm text-[rgba(255,255,255,0.5)]'
                    >
                      "{definition.example}"
                    </p>

                    <Lexicals lexicals={synonyms} title='synonyms' />

                    <Lexicals lexicals={antonyms} title='antonyms' />
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </Fragment>
      ))}
    </div>
  );
};

export default WordInfo;
