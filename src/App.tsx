import React from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import QuoteBoxHooks from './components/QuoteBoxHooks';

const App: React.FC = () => {
  return (
    <div className="App">
      <QuoteBox />
      <QuoteBoxHooks />
    </div>
  );
}

export default App;
