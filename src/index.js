import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import ContextWrapper from '../src/components/ContextWrapper';
import Layout from '../src/components/Layout';

render(
  <ContextWrapper>
    <Layout>
      <App />
    </Layout>
  </ContextWrapper>,
  document.getElementById('root')
);
