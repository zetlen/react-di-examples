import React from 'react';

export const Horse = () => <em>🐴</em>;

export const Bird = () => <em>🕊</em>;

export const Cookie = ({ blue }) =>
  blue ? <em style={{ filter: 'hue-rotate(160deg)' }}>🍪</em> : <em>🍪</em>;

const Reverse = (Original) => (props) => (
  <div style={{
    display: 'inline-block',
    transform: 'scaleX(-1)'
  }}>
    <Original {...props} />
  </div>
);

Horse.Reverse = Reverse(Horse);
