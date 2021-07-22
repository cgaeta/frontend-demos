import React from 'react';
import { Button as AntdButton } from 'antd';
import create from 'zustand';

import 'antd/dist/antd.css';

enum LoadState {
  idle = "idle",
  loading = "loading",
};
type ZustandStore = {
  counter: number,
  loadState: LoadState,
  increment: () => void,
  asyncIncrement: () => void,
};

const memeRequest = () => new Promise((resolve) =>
  setTimeout(() => resolve(null), 500)
);  

const useStore = create<ZustandStore>((set) => ({
  counter: 0,
  loadState: LoadState.idle,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  asyncIncrement: async () => {
    set((state) => ({ loadState: LoadState.loading }));
    await memeRequest();
    set((state) => ({
      counter: state.counter + 1,
      loadState: LoadState.idle,
    }));
  },
}));

const ZustandCounter = () => {
  const {
    counter,
    loadState,
    increment,
    asyncIncrement,
  } = useStore((state) => state);

  return (
    <div>
      <div>{counter}</div>
      <div>
        <AntdButton type="primary" onClick={increment}>Antd Button</AntdButton>
        <AntdButton
          onClick={asyncIncrement}
          disabled={loadState === LoadState.loading}
        >
          Async
        </AntdButton>
      </div>
    </div>
  );
}

export default ZustandCounter;
