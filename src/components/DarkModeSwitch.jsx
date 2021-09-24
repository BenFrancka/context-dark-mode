import React, { useContext } from 'react';
import { DarkModeContext } from '../hooks/ThemeProvider';

const darkModeSwitch = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button aria-label= "toggle-theme" onClick={toggleDarkMode}>
      click for {darkMode ? 'light' : 'dark'}
    </button>
  );
};

export default darkModeSwitch;
