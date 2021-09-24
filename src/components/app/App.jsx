import React from 'react';
import DarkModeSwitch from '../DarkModeSwitch';
import List from '../List';

export default function App() {
  return (
    <main id= "main" role="main" aria-label="page">
      <DarkModeSwitch />
      <List />
    </main>
  );
}
