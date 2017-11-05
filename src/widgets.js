import React from 'react';

export const Horse = () => <em>🐴</em>;

export const Bird = () => <em>🕊</em>;

export const Cookie = ({ blue }) =>
  blue ? <em style={{ filter: 'hue-rotate(160deg)' }}>🍪</em> : <em>🍪</em>;

const Reverse = (Comp) => (props) => (
  <div style={{
    display: 'inline-block',
    transform: 'scaleX(-1)'
  }}>
    <Comp {...props} />
  </div>
);

Horse.Reverse = Reverse(Horse);