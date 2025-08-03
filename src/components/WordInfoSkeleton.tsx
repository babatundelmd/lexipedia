import WordDisplay from '../components/WordDisplay';
import DefinitionCard from '../components/DefinitionCard';
import PhrasesSection from '../components/PhrasesSection';
import SynonymsButton from '../components/SynonymsButton';
import EtymologySection from '../components/EtymologySection';
import PronunciationButton from '../components/PronunciationButton';

const WordInfoSkeleton = () => {
  return (
    <div className='mt-4 grid gap-3 min-h-screen mb-2'>
      <WordDisplay isLoading />
      <PronunciationButton isLoading />
      <DefinitionCard isLoading />
      <SynonymsButton isLoading />
      <EtymologySection isLoading />
      <PhrasesSection isLoading />
    </div>
  );
};

export default WordInfoSkeleton;
