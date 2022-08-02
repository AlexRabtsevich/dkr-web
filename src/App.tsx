import React from 'react';
import { Button } from '@mui/material';

import { ThemeProvider } from './ui-kit';

const App = () => {
  return (
    <ThemeProvider>
      <div className='App'>
        <header className='App-header'>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Learn React
          </a>

          <Button color='primary'>test</Button>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
