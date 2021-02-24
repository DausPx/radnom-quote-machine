import React from 'react';
import './App.css';
import QuoteBoxRecoil from './components/QuoteBoxRecoil'
import QuoteBoxSelector from './components/QuoteBoxSelector';

const App: React.FC = () => {
  return (
    <div className="App">
      <QuoteBoxRecoil />
      
      <React.Suspense fallback={<div>Loading...</div>}>
        <QuoteBoxSelector/>
      </React.Suspense>
    </div>
  );
}

export default App;
