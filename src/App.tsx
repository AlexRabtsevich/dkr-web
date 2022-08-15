import React from 'react';

import { Layout } from './layout';
import { AlertContextProvider, ThemeProvider } from './ui-kit';
import { PageRoutes } from './navigation';
import { GqlProvider } from './gql';

const App = () => {
  return (
    <ThemeProvider>
      <GqlProvider>
        <AlertContextProvider>
          <Layout>
            <PageRoutes />
          </Layout>
        </AlertContextProvider>
      </GqlProvider>
    </ThemeProvider>
  );
};

export default App;
