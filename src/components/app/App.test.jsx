import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('light and dark mode behavior', () => {
  // eslint-disable-next-line max-len
  it('switches between light and dark mode when the button is clicked', async () => {
    render(<App />);

    const themeButton = screen.getByRole('button', { name: 'toggle-theme' });

    //const page = screen.findbyRole('main', { name: 'page' });
    const main = screen.getByRole('main', { name: 'page' });
    fireEvent.click(themeButton);

    return waitFor(() => {
      expect(main).toHaveStyle({ 'background-color': 'black' });
    });
  });
});
