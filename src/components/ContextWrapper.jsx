import React, { useState } from 'react';
import { DarkModeContext } from '../hooks/ThemeProvider';

const ContextWrapper =  (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default ContextWrapper;
