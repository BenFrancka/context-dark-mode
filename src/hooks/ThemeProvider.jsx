import React, { createContext } from 'react';

export const DarkModeContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {},
});
