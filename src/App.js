import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{textAlign: 'center', color: '#61dafb', lineHeight: 1.2}}>
            <h1 style={{margin: 0, fontSize: '1.8rem', fontWeight: 700}}>Learn React with Nadeem Anwar</h1>
            <p style={{margin: '0.4rem 0 0', fontSize: '0.95rem', opacity: 0.9}}>
              Hands‑on lessons to build beautiful, modern UIs using components, hooks, and real projects.
            </p>
          </div>
        </a>
      </header>
    </div>
  );
}

export default App;


// Install react-router-dom if you haven't already:
// npm install react-router-dom