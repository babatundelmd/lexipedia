interface SynonymsSectionProps {
  count?: number;
  synonyms?: string[];
  label?: string;
  isLoading?: boolean; // Add loading state prop
}

const SynonymsButton = ({
  count = 3,
  // the synonyms props from the array can be changed back to empty array and then it will depend on the api response
  synonyms = ["similar", "alike", "comparable", "analogous", "akin", "related"],
  label = "Synonyms",
  isLoading = false, // Default to loading
}: SynonymsSectionProps) => {
  return (
    <div
      className={`mx-4 mt-4 ${isLoading ? "" : " bg-[#141414] rounded-lg p-4"}`}
    >
      {/* Container for the synonyms section */}
      <div className="flex flex-wrap gap-2">
        {/* Label section */}
        <div
          className={`mx-4 ${
            isLoading
              ? "w-16 h-4 rounded delay-300 skeleton-shimmer"
              : "text-lg font-bold text-white mb-2"
          }`}
        >
          {!isLoading && label}
        </div>

        {/* Synonyms section */}
        {isLoading
          ? Array(count)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-16 h-4  rounded skeleton-shimmer"
                  style={{ animationDelay: `${1600 + index * 100}ms` }}
                ></div>
              ))
          : synonyms.map((synonym, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-sm place-content-center cursor-pointer rounded-full duration-200 ${
                  isLoading
                    ? " border border-blue-200"
                    : "border-0 text-blue-100"
                }`}
              >
                {synonym}
              </span>
            ))}
      </div>
    </div>
  );
};

export default SynonymsButton;
