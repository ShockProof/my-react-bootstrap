import React from 'react';
import { CookiesProvider } from 'react-cookie';

import ThemeProvider from './style-root/ThemeProvider';
import App from './ui-v1/App';

export default function Root() {
  return (
    <CookiesProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CookiesProvider>
  );
}
