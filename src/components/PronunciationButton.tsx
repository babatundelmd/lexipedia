import { BsFillPlayFill } from "react-icons/bs";

interface PronunciationButtonProps {
  icon?: React.ElementType;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
  pronunciation?: {
    text: string;
  };
  isLoading?: boolean;
}

const PronunciationButton: React.FC<PronunciationButtonProps> = ({
  icon: Icon = BsFillPlayFill,
  onClick,
  ariaLabel = "Play pronunciation",
  className = "",
  pronunciation = { text: "Speech" }, // can be chnsged based on the api response
  isLoading = false, // Changed default to false
}) => {
  return (
    <div className="h-20 flex items-center justify-end px-6 w-full">
      <button
        onClick={isLoading ? undefined : onClick}
        aria-label={ariaLabel}
        disabled={isLoading}
        className={`
          w-1/4 h-14 rounded-full 
          flex items-center justify-center space-x-2 
          duration-300 focus:outline-none 
          ${
            isLoading
              ? " skeleton-shimmer cursor-not-allowed"
              : "bg-[#141414]  text-white cursor-pointer"
          } 
          ${className}
        `}
      >
        {isLoading && <Icon size={25} color="#ffffff" />}
        {!isLoading && (
          <div className="flex items-center gap-2">
            <span>
              <Icon size={20} color="#ffffff" />
            </span>
            <span className="text-sm font-medium pla text-white">
              {pronunciation.text}
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default PronunciationButton;
