import './App.css';
import React from 'react';
import FirstComponent from './component/Firstcomponent';
import { SecondComponent } from './component/Firstcomponent';

function App() {
  return (
    <div className="App">
      <h1>Nadeem Anwar Todo Application</h1>

      <FirstComponent />
      <SecondComponent />
    </div>
  );
}





export default App;


// Install react-router-dom if you haven't already:
// npm install react-router-dom