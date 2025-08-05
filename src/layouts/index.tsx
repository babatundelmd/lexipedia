import { Outlet, Link, useLocation } from 'react-router-dom';

import ROUTES from '../routes';
import logo from '../assets/lexipedia.png';
import ThemeToggle from '../components/ThemeToggle';

const MainLayout = () => {
  const { HISTORY, HOME } = ROUTES;
  const { pathname } = useLocation();

  const navLinks = [{ title: 'History', link: HISTORY }];

  return (
    <main>
      <header className='header'>
        <Link to={HOME} className='flex items-center gap-2 text-primary'>
          <img
            src={logo}
            loading='eager'
            alt='Lexipedia'
            className='w-10 h-10 rounded-full bg-white'
          />
          <span>Lexipedia</span>
        </Link>

        <ThemeToggle />

        <nav>
          <ul>
            {navLinks.map(({ link, title }) => (
              <li key={title} className={`nav-link ${pathname === link && 'selected'}`}>
                <Link to={link} className='!text-inherit'>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Outlet />
    </main>
  );
};

export default MainLayout;
