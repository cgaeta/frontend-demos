import React from 'react';
import { Button as AntdButton } from 'antd';
import create from 'zustand';

import 'antd/dist/antd.css';

type ZustandStore = {
  counter: number,
  increment: () => void,
}
const useStore = create<ZustandStore>((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 }))
}));

const ZustandCounter = () => {
  const { counter, increment } = useStore((state) =>
    ({ counter: state.counter, increment: state.increment })
  );

  return (
    <div>
      <div>{counter}</div>
      <div>
        <AntdButton type="primary" onClick={increment}>Antd Button</AntdButton>
      </div>
    </div>
  );
}

export default ZustandCounter;
