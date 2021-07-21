import React from 'react';

type ContainerType = {
  children: JSX.Element[],
};

const Row = ({ children }: ContainerType) => (
  <div style={{ margin: '8px auto', lineHeight: '1.25' }}>
    {children}
  </div>
);

export default Row;
