interface AlertProps {
  msg: string;
  zIndex?: string;
  bgColor?: string;
  duration?: number;
  textColor?: string;
}

interface Definition {
  example?: string;
  synonyms: string[];
  antonyms: string[];
  definition: string;
}

interface Meaning {
  antonyms: string[];
  synonyms: string[];
  partOfSpeech: string;
  definitions: Definition[];
}

interface License {
  name: string;
  url: string;
}

interface Phonetic {
  text?: string;
  audio: string;
  license?: License;
  sourceUrl?: string;
}

interface WordInfo {
  word: string;
  license: License;
  meanings: Meaning[];
  sourceUrls: string[];
  phonetics: Phonetic[];
}

interface ErrorAPI {
  title: string;
  message: string;
  resolution: string;
}
