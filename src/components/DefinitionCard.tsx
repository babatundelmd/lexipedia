// interface DefinitionCardProps {
//   count?: number;
//   definition?: {
//     text: string;
//     label: string;
//     partsOfSpeech: string; // e.g., "Noun", "Verb"
//     example: string;
//     nmber: number; // Optional number for definition label
//   }
//   [];
//   isLoading?: boolean; // Add loading state prop
// }

// const DefinitionCard = ({
//   count = 2,
//   // the definition props from the array can be changed back to empty array and then it will depend on the api response
//   definition = [
//     {
//       text: "The act of speaking or performing vocally.",
//       label: "",
//       partsOfSpeech: "Noun",
//       example: "His clear enunciation made the speech easy to understand.",
//       nmber: 1, // Example number for definition label
//     },
//   ],

//   isLoading = false, // Default to not loading
// }: DefinitionCardProps) => {
//   return (
//     <div>
//       <div className="mx-6 rounded-lg p-6  border">
//         {/* Parts of speech section */}
//         <div className="mb-4">
//           <div
//             className={`w-12 h-4 rounded ${
//               isLoading
//                 ? "bg-content delay-400 skeleton-shimmer"
//                 : "text-sm font-medium text-gray-600"
//             }`}
//           >
//             {!isLoading && definition.partsOfSpeech}
//           </div>
//         </div>

//         <div className="mb-6">
//           {Array(count)
//             .fill(null)
//             .map((_, index) => (
//               <div className="flex items-start mb-8" key={index}>
//                 {/* Number/label section */}
//                 <div
//                   className={`w-4 h-4 rounded mr-3 ${
//                     isLoading
//                       ? "bg-content delay-300 skeleton-shimmer"
//                       : "text-sm font-bold text-gray-700 flex items-center justify-center"
//                   }`}
//                 >
//                   <span>{!isLoading && definition.nmber}</span>

//                   {isLoading && definition.label}
//                 </div>

//                 <div className="grid gap-2 flex-grow">
//                   {/* Definition text */}
//                   <div
//                     className={`rounded mb-2 ${
//                       isLoading
//                         ? "w-full h-6 bg-content delay-300 skeleton-shimmer"
//                         : "text-gray-900 font-medium"
//                     }`}
//                   >
//                     {!isLoading && definition.text}
//                   </div>

//                   {/* Example text */}
//                   <div
//                     className={`rounded mb-2 ${
//                       isLoading
//                         ? "w-3/4 h-6 bg-content delay-400 skeleton-shimmer"
//                         : "text-gray-600 italic"
//                     }`}
//                   >
//                     {!isLoading && definition.example}
//                   </div>

//                   {/* Additional placeholder line when loading */}
//                   {isLoading && (
//                     <div className="w-1/2 h-4 bg-content rounded delay-500 skeleton-shimmer"></div>
//                   )}
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DefinitionCard;

interface DefinitionCardProps {
  count?: number;
  definition?: {
    text: string;
    label: string;
    partsOfSpeech: string; // e.g., "Noun", "Verb"
    example: string;
    number: number; // Fixed typo: was "nmber"
  }[];
  isLoading?: boolean; // Add loading state prop
}

const DefinitionCard = ({
  count = 3, // Default to null to handle dynamic count,
  // the definition props from the array can be changed back to empty array and then it will depend on the api response
  definition = [
    {
      text: "The act of speaking or performing vocally.",
      label: "",
      partsOfSpeech: "Noun",
      example: "His clear enunciation made the speech easy to understand.",
      number: 1, // Fixed typo: was "nmber"
    },
    {
      text: "A vocal expression of thoughts or feelings.",
      label: "",
      partsOfSpeech: "Noun",
      example: "Her singing was a beautiful enunciation of her emotions.",
      number: 2,
    },
    {
      text: "The act of speaking or performing vocally.",
      label: "",
      partsOfSpeech: "Noun",
      example: "His clear enunciation made the speech easy to understand.",
      number: 3, // Fixed typo: was "nmber"
    },
  ],
  isLoading = false, // Default to not loading
}: DefinitionCardProps) => {
  return (
    <div>
      <div className="mx-6 rounded-lg p-6 border bg-[#141414]">
        {/* Parts of speech section */}
        <div className="mb-4">
          {isLoading ? (
            <div className="w-16 h-4 rounded skeleton-shimmer"></div>
          ) : (
            <div className="text-sm font-medium text-white">
              {definition[0]?.partsOfSpeech}
            </div>
          )}
        </div>

        <div className="mb-6">
          {Array(count)
            .fill(null)
            .map((_, index) => {
              const currentDefinition = definition[index] || definition[0]; // Fallback to first definition

              return (
                <div className="flex items-start mb-8" key={index}>
                  {/* Number/label section */}
                  <div className="w-4 h-4 rounded mr-3 flex items-center justify-center">
                    {isLoading ? (
                      <div className="w-4 h-4 rounded skeleton-shimmer"></div>
                    ) : (
                      <span className="text-sm font-bold text-white">
                        {currentDefinition.number}
                      </span>
                    )}
                  </div>

                  <div className="grid gap-2 flex-grow">
                    {/* Definition text */}
                    {isLoading ? (
                      <div className="w-full h-6 rounded skeleton-shimmer mb-2"></div>
                    ) : (
                      <div className="text-white font-medium mb-2">
                        {currentDefinition.text}
                      </div>
                    )}

                    {/* Example text */}
                    {isLoading ? (
                      <div className="w-3/4 h-6 rounded skeleton-shimmer mb-2"></div>
                    ) : (
                      <div className="text-white italic mb-2">
                        {currentDefinition.example}
                      </div>
                    )}

                    {/* Additional placeholder line when loading */}
                    {isLoading && (
                      <div className="w-1/2 h-4 rounded skeleton-shimmer"></div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DefinitionCard;
