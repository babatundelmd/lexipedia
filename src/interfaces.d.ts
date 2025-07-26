interface Definition {
  example?: string;
  synonyms: string[];
  antonyms: string[];
  definition: string;
}

interface Meaning {
  antonyms: [];
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

interface ReadOnly<WordInfo> {
  word: string;
  license: License;
  meanings: Meaning[];
  sourceUrls: string[];
  phonetics: Phonetic[];
}
