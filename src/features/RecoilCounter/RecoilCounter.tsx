import React from 'react';
import { Button as EvergreenButton } from 'evergreen-ui';
import { atom, useRecoilState } from 'recoil';

import 'antd/dist/antd.css';
import '@shopify/polaris/dist/styles.css';


const recoilState = atom({
  key: 'recoilState',
  default: 0,
});

const RecoilCounter = () => {
  const [recoilCounter, setRecoilCounter] = useRecoilState(recoilState)

  return (
    <div>
      <div>{recoilCounter}</div>
      <div>
        <EvergreenButton onClick={() => setRecoilCounter(recoilCounter + 1)}>
          Evergreen Button
        </EvergreenButton>
      </div>
    </div>
  );
}

export default RecoilCounter;
