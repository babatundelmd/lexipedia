import { Outlet, Link } from 'react-router-dom';

import ROUTES from 'routes';

const MainLayout = () => {
  const { HISTORY, HOME } = ROUTES;

  return (
    <main>
      <header className='h-16 px-8 flex items-center justify-between border'>
        <Link to={HOME} className='flex gap-2'>
          {/* TODO: Place Lexipedia Logo in img src */}
          <img src='' alt='Lexipedia' />
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
