import { createContext, use, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };

  const themeInfo = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

function ThemeCard() {
  const { theme, toggleTheme } = use(ThemeContext); // read context value

  return (
    <div className="flex flex-col gap-6">
      <div
        className={
          theme === 'light'
            ? 'rounded bg-gray-50 p-8 text-neutral-900 border border-gray-100'
            : 'rounded bg-gray-900 p-8 text-neutral-300 border border-gray-800'
        }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        dolores illo, reprehenderit voluptate recusandae perspiciatis quam,
        pariatur commodi possimus officiis quas vitae voluptatum. Magni aliquam
        eligendi itaque possimus sit dolorem.
      </div>
      <div>
        <button
          onClick={toggleTheme}
          className="p-3 text-white bg-blue-600 rounded"
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default function Theme() {
  return (
    <ThemeProvider>
      <ThemeCard />
    </ThemeProvider>
  );
}
