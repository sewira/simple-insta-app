import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import Route from './routes';
import Register from './screens/Register';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <Route /> */}
      <Register />
    </SafeAreaProvider>
  );
};

export default App;
