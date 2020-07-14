import React, { useEffect, useRef } from 'react';

import { useCookies } from 'react-cookie';

import ThemeContext from './ThemeContext';

function ThemeProvider({ children }) {

  const [cookies, setCookies] = useCookies(['theme']);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    window.location.reload();
  }, [cookies]);

  function setTheme(themeName) {
    let date = new Date();
    date.setTime(date.getTime() + 60*1000);

    setCookies('theme', themeName, { path: '/' });
  }

  if (cookies.theme === 'first') {
    require('./AppTheme.scss');
  } else if (cookies.theme === 'second') {
    require('./AppTheme2.scss');
  } else {
    require('./AppTheme3.scss');
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: cookies.theme,
        setTheme,
      }}>

      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
