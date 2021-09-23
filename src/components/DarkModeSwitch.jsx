import React, { useContext } from 'react';
import styled from 'styled-components';
import { DarkModeContext } from '../hooks/ThemeProvider';

const darkModeSwitch = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button onClick={toggleDarkMode}>
      click for {darkMode ? 'light' : 'dark'}
    </button>
  );
};

export default darkModeSwitch;

