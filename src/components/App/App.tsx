import { useState } from 'react';

import classes from './App.module.scss';

export function App() {
  const [isDarkTheme, setDarkTheme] = useState<boolean>(true);
  return (
    <div className={`${classes.root} ${isDarkTheme ? classes.dark : classes.light}`}>
      <h1>React + SASS + Webpack boilerplate🚀</h1>
      <div className={classes.code}>
        <code>react@18.1.0</code>
        <code>react-dom@18.1.0</code>
        <code>@babel/core@7.17.10</code>
        <code>eslint@8.2.0</code>
        <code>sass@1.51.0</code>
        <code>typescript@4.6.4</code>
        <code>webpack@5.72.0</code>
      </div>

      <div
        className={classes.themeToggle}
        onClick={() => setDarkTheme(!isDarkTheme)}
      >
        🌗
      </div>
    </div>
  );
}
