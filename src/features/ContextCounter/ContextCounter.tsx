import React, { createContext, useContext } from 'react';
import { Button as PolarisButton, AppProvider } from '@shopify/polaris';

import '@shopify/polaris/dist/styles.css';

export type CounterContextType = {
  counter: number,
  increment: () => void,
};
export const CounterContext = createContext<CounterContextType>({
  counter: 0,
  increment: () => {},
});

const ContextCounter = () => {
  const { counter, increment } = useContext(CounterContext);
  return (
    <div>
      <div>{counter}</div>
      <div>
        <PolarisButton onClick={increment}>Polaris Button</PolarisButton>
      </div>
    </div>
  );
}

export default ContextCounter;
