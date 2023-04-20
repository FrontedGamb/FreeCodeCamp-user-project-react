import React from 'react';
import { Testimonio } from './components/Testimonio';
import data from './components/data';
import "./App.css"
function App() {
  return (
    <div className="App">
      {data.map((testimonio, index) => (
        <Testimonio key={index} {...testimonio} />
      ))}
    </div>
  );
}
export default App;


