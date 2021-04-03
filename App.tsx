/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {AppearanceProvider} from 'react-native-appearance';
import {ThemeProvider} from './src/utils/theme/ThemeProvider';

import Providers from './src/navigation';

const queryClient = new QueryClient();

const App: React.FC<{}> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppearanceProvider>
        <ThemeProvider>
          <Providers />
        </ThemeProvider>
      </AppearanceProvider>
    </QueryClientProvider>
  );
};

export default App;
