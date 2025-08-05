import { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export const ThemeContext = createContext<Partial<ThemeContext>>({});

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ prefersDarkMode, setPrefersDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
