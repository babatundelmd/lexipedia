interface EtymologySectionProps {
  origin?: {
    text: string;
    label: string;
  };
  isLoading?: boolean; // Add loading state prop
}

const EtymologySection = ({
  // the origin props from the array can be changed back to empty array and then it will depend on the api response
  origin = {
    text: " The word 'etymology' comes from the Greek word 'etymon', meaning 'true sense', and 'logia', meaning 'study of'.",
    label: " Origin",
  },
  isLoading = false, // Default to loading
}: EtymologySectionProps) => {
  return (
    <div
      className={`p-6 m-6 border rounded-lg shadow-md ${
        isLoading ? "" : "bg-[#141414] "
      }`}
    >
      {/* Title/label section */}
      <div
        className={`mb-4 ${
          isLoading
            ? "w-12 h-5 bg-content rounded skeleton-shimmer delay-100"
            : "text-sm font-semibold text-white"
        }`}
      >
        {!isLoading && origin.label}
      </div>

      <div className="space-y-2">
        {/* Main text content */}
        <div
          className={`${
            isLoading
              ? "w-full h-3 bg-content rounded skeleton-shimmer delay-200"
              : "text-white text-sm leading-relaxed"
          }`}
        >
          {!isLoading && origin.text}
        </div>

        {/* Additional placeholder lines when loading */}
        {isLoading && (
          <>
            <div className="w-5/6 h-3 bg-content rounded skeleton-shimmer delay-300"></div>
            <div className="w-3/4 h-3 bg-content rounded skeleton-shimmer delay-400"></div>
            <div className="w-1/2 h-3 bg-content rounded skeleton-shimmer delay-500"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default EtymologySection;
