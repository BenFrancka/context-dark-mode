import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import listData from '../../fixtures/ListData.json';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

const Layout = styled.div`
  background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

describe('light and dark mode styled component', () => {
  // eslint-disable-next-line max-len
  it('switches between light and dark mode when the button is clicked', () => {
    const tree = renderer.create(<Layout />).toJSON();

    return waitFor(() => {
      expect(tree).toHaveStyleRule({ 'background-color': 'black' });
      expect(tree).toHaveStyleRule({ color: 'white' });
    });
  });
});

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(listData));
  })
);

describe('App page', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('Displays a list', async () => {
    const { container } = render(<App />);

    screen.getByRole('button', { name: 'toggle-theme' });

    screen.getByAltText('loading spinner');

    const ul = await screen.findByRole('list', { name: 'character-list' });
    expect(ul).not.toBeEmptyDOMElement;
    expect(container).toMatchSnapshot;
  });
});
