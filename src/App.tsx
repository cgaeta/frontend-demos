import React, { useState, useCallback } from 'react';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import { RecoilRoot } from 'recoil';

import 'antd/dist/antd.css';
import '@shopify/polaris/dist/styles.css';

import logo from './logo.svg';
import ZustandCounter from './features/ZustandCounter/ZustandCounter';
import RecoilCounter from './features/RecoilCounter/RecoilCounter';
import ContextCounter, { CounterContext } from './features/ContextCounter/ContextCounter';
import ReduxCounter from './features/ReduxCounter/ReduxCounter';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => setCounter(counter + 1), [counter, setCounter])
  return (
    <RecoilRoot>
      <AppProvider i18n={enTranslations}>
        <CounterContext.Provider value={{ counter, increment }}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Counter />
              <ZustandCounter />
              <RecoilCounter />
              <ContextCounter />
              <ReduxCounter />
            </header>
          </div>
        </CounterContext.Provider>
      </AppProvider>
    </RecoilRoot>
  );
}

export default App;
