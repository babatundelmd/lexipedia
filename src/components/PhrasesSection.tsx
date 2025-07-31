interface PhrasesSectionProps {
  count?: number;
  phrases?: Array<{
    phrase: string;
    meaning: string;
  }>;
  title?: string;
  isLoading?: boolean; // Add loading state prop
}

const PhrasesSection = ({
  count = 1,
  // the phrases props from the array can be changed back to empty array and then it will depend on the api response

  phrases = [
    {
      phrase: "Break the ice",
      meaning: "To initiate conversation in a social setting.",
    },
    {
      phrase: "Bite the bullet",
      meaning: "To endure a painful situation that is unavoidable.",
    },
  ],
  title = " Phrases ",
  isLoading = false, // Default to loading
}: PhrasesSectionProps) => {
  return (
    <div
      className={`p-2 border-l  border-1 mx-6  rounded-sm ${
        isLoading ? "" : "bg-[#141414]"
      }`}
    >
      {/* Title section */}
      <div
        className={`mb-4 ${
          isLoading
            ? "w-16 h-5 bg-content rounded delay-300 skeleton-shimmer"
            : "text-lg font-bold text-white"
        }`}
      >
        {!isLoading && title}
      </div>

      {isLoading
        ? Array(count)
            .fill(null)
            .map((_, index) => (
              <div className="mb-6" key={index}>
                <div className="w-32 h-4 bg-content rounded mb-2 delay-300 skeleton-shimmer"></div>
                <div className="w-full h-3 bg-content rounded mb-1 delay-400 skeleton-shimmer"></div>
                <div className="w-3/4 h-3 bg-content rounded mb-1 delay-500 skeleton-shimmer"></div>
                <div className="w-1/2 h-3 bg-content rounded delay-600 skeleton-shimmer"></div>
              </div>
            ))
        : phrases.map((item, index) => (
            <div className="mb-4" key={index}>
              <div className="text-2xl font-bold text-white mb-2">
                {item.phrase}
              </div>
              <div className="text-sm text-white">{item.meaning}</div>
            </div>
          ))}
    </div>
  );
};

export default PhrasesSection;
