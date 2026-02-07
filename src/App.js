import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Nadeem Anwar Todo Application</h1>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

//creating our first component
function FirstComponent() {
  return (
    <div>
      <h1>This is my first component</h1>
    </div>
  );
}

function SecondComponent() {
  return (
    <div>
      <h1>This is my second component</h1>
    </div>
  );
} 



//creating first class component
class ThirdComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>This is my third class component</h1>
      </div>
    );
  }
}


export default App;


// Install react-router-dom if you haven't already:
// npm install react-router-dom