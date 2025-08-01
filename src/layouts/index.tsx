import { Outlet, Link } from "react-router-dom";

import ROUTES from "../routes";
import logo from "../assets/lexipedia.png";
import DefinitionCard from "../components/DefinitionCard";
import EtymologySection from "../components/EtymologySection";
import PhrasesSection from "../components/PhrasesSection";
import PronunciationButton from "../components/PronunciationButton";
import SynonymsButton from "../components/SynonymsButton";
import WordDisplay from "../components/WordDisplay";

const MainLayout = () => {
  const { HISTORY, HOME } = ROUTES;

  return (
    <main>
      <header className="h-16 px-8 flex items-center justify-between border">
        <Link to={HOME} className="flex items-center gap-2">
          <img
            src={logo}
            alt="Lexipedia"
            className="w-10 h-10 rounded-full bg-white"
          />
          <span>Lexipedia</span>
        </Link>

        <nav>
          <ul>
            <li className="nav-link">
              <Link to={HISTORY}>History</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* basically to test the skeleton loading state  and the is loading prop can be changed to false to see the display of the components */}
      <div className=" mt-4 grid  gap-3 min-h-screen mb-2">
        <WordDisplay isLoading={false} />
        <PronunciationButton isLoading={false} />
        <DefinitionCard isLoading={false} />
        <SynonymsButton isLoading={false} />
        <EtymologySection isLoading={false} />
        <PhrasesSection isLoading={false} />
      </div>

      <Outlet />
    </main>
  );
};

export default MainLayout;
