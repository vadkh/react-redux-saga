import React, { Fragment } from 'react';

const RatesList = ({ rates, base, changeBase }) => (
  <Fragment>
    {base && <div>Selected currency - {base}</div>}
    {Object.keys(rates).map(keyName => (
      <div onClick={() => changeBase(keyName)} key={keyName}>
        {keyName} - {rates[keyName]}
      </div>
    ))}
  </Fragment>
);

export default RatesList;
