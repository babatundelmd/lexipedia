import { Outlet, Link } from 'react-router-dom';

import ROUTES from '../routes';
import logo from '../assets/lexipedia.png';

const MainLayout = () => {
  const { HISTORY, HOME } = ROUTES;

  return (
    <main>
      <header className='h-16 px-8 flex items-center justify-between border-b'>
        <Link to={HOME} className='flex items-center gap-2'>
          <img src={logo} alt='Lexipedia' className='w-10 h-10 rounded-full bg-white' />
          <span>Lexipedia</span>
        </Link>

        <nav>
          <ul>
            <li className='nav-link'>
              <Link to={HISTORY}>History</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </main>
  );
};

export default MainLayout;
