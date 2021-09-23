import React, { useContext } from 'react';
import styled from 'styled-components';
import { DarkModeContext } from '../hooks/ThemeProvider';

const darkModeSwitch = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <main>
      <button onClick={toggleDarkMode}>
        click for {darkMode ? 'light' : 'dark'}
      </button>
      
    </main>
  );
};

export default darkModeSwitch;
