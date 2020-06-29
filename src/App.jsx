import React from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

function App() {
  return (
    <div className="App">
      <p>{uuid()}</p>
    </div>
  );
}

export default App;
