import React, { createContext, useContext } from 'react';
import { Button as PolarisButton, AppProvider } from '@shopify/polaris';

import '@shopify/polaris/dist/styles.css';

export type CounterContextType = {
  counter: number,
  increment: () => void,
  asyncIncrement: () => void,
};
export const CounterContext = createContext<CounterContextType>({
  counter: 0,
  increment: () => {},
  asyncIncrement: async () => {},
});

const ContextCounter = () => {
  const { counter, increment, asyncIncrement } = useContext(CounterContext);
  return (
    <div>
      <div>{counter}</div>
      <div>
        <PolarisButton onClick={increment}>Polaris Button</PolarisButton>
        <PolarisButton outline onClick={asyncIncrement}>Async</PolarisButton>
      </div>
    </div>
  );
}

export default ContextCounter;
