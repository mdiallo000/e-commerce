import React from 'react';
import './default.scss';
import Header from './Components/Header';
import Homepage from './Pages/Homepage';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
