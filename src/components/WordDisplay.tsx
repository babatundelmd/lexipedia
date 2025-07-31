interface WordDisplayProps {
  word?: {
    text: string;
  };
  isLoading?: boolean; // Add loading state prop
}

const WordDisplay = ({
  // the word props from the array can be changed back to empty array and then it will
  word = { text: " Speech" }, // Default word text and can be changed based on the API response
  isLoading = false, // Default to loading
}: WordDisplayProps) => {
  return (
    <div className="px-6 mb-8">
      <div
        className={`w-80 h-20 rounded flex items-center justify-center ${
          isLoading
            ? "skeleton-shimmer delay-300"
            : "bg-[#141414] border-1  shadow-sm"
        }`}
      >
        {!isLoading && (
          <h1 className="text-4xl font-bold text-white text-center">
            {word.text}
          </h1>
        )}
      </div>
    </div>
  );
};

export default WordDisplay;
