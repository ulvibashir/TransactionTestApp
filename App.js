import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootNavigation } from './navigation/RootNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import store, {persistor} from './redux';



export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}

