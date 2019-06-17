import React from 'react';

import './App.css';
import Button from './containers/Button';
import RatesList from './containers/RatesList';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Button />
      <RatesList />
    </header>
  </div>
);

export default App;
