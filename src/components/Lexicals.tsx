import { useNavigate } from 'react-router-dom';

import ROUTES from '../routes';

interface Props {
  title: string;
  lexicals: string[];
}

const Lexicals: React.FC<Props> = ({ lexicals, title }) => {
  const navigate = useNavigate();

  const onLexicalClick = (lexical: string) => {
    navigate(`${ROUTES.WORD_INFO.replace(':word', lexical)}`);
  };

  return (
    <div className={`mt-4 grid grid-cols-[100px_1fr] ${lexicals.length || 'hidden'}`}>
      <p>{title}</p>
      <div>
        {lexicals.map((lexical, index) => (
          <p
            key={index}
            onClick={() => onLexicalClick(lexical)}
            className="inline cursor-pointer !text-blue-600 hover:underline after:content-[',_'] after:text-[initial] last:after:content-['']"
          >
            {lexical}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Lexicals;
