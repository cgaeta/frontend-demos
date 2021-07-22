import React, { useState, useCallback } from 'react';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import { RecoilRoot } from 'recoil';

import 'antd/dist/antd.css';
import '@shopify/polaris/dist/styles.css';

import logo from './logo.svg';
import Row from './layout/Row';
import ZustandCounter from './features/ZustandCounter/ZustandCounter';
import RecoilCounter from './features/RecoilCounter/RecoilCounter';
import ContextCounter, { CounterContext } from './features/ContextCounter/ContextCounter';
import ReduxCounter from './features/ReduxCounter/ReduxCounter';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => setCounter(counter + 1), [counter, setCounter]);
  const asyncIncrement = useCallback(async () => {
    await new Promise((r) => setTimeout(() => r(null), 500));
    setCounter((c) => c + 1);
  }, [setCounter]);
  return (
    <RecoilRoot>
      <AppProvider i18n={enTranslations}>
        <CounterContext.Provider
          value={{
            counter,
            increment,
            asyncIncrement,
          }}
        >
          <div className="App">
            <header className="App-header">
              <Row>
                <h3>Proper Redux + Toolkit</h3>
                <Counter />
              </Row>
              <Row>
                <h3>Zustand</h3>
                <ZustandCounter />
              </Row>
              <Row>
                <h3>Recoil</h3>
                <RecoilCounter />
              </Row>
              <Row>
                <h3>UseState &amp; UseContext</h3>
                <ContextCounter />
              </Row>
              <Row>
                <h3>Laxy Redux Implementation</h3>
                <h4>Minimal for comparison</h4>
              </Row>
              <ReduxCounter />
            </header>
          </div>
        </CounterContext.Provider>
      </AppProvider>
    </RecoilRoot>
  );
}

export default App;
