import React, { useState } from 'react';

type Meaning = {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example?: string;
  }[];
};

type DictionaryResponse = {
  word: string;
  phonetic?: string;
  meanings: Meaning[];
}[];

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [result, setResult] = useState<DictionaryResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error('Word not found');
      const data: DictionaryResponse = await res.json();
      setResult(data);
    } catch (err) {
      setError('Could not find definition. Try another word.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">📘 LEXIPEDIA</h1>

      <div className="w-full max-w-md flex flex-col items-center">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter a word..."
          className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 rounded-md"
        >
          Search
        </button>
      </div>

      {/* Feedback */}
      {loading && <p className="mt-6 text-gray-300">Loading...</p>}
      {error && <p className="mt-6 text-red-500">{error}</p>}

      {/* Results */}
      {result && result.map((entry, index) => (
        <div key={index} className="mt-10 w-full max-w-2xl bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">{entry.word}</h2>
          {entry.phonetic && <p className="text-gray-400 mb-4">/{entry.phonetic}/</p>}

          {entry.meanings.map((meaning, idx) => (
            <div key={idx} className="mb-4">
              <h4 className="text-blue-400 capitalize mb-1">{meaning.partOfSpeech}</h4>
              <ul className="list-disc list-inside space-y-2">
                {meaning.definitions.map((def, i) => (
                  <li key={i}>
                    <p>{def.definition}</p>
                    {def.example && <p className="text-gray-400 italic">💡 {def.example}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Search;
