import logo from './logo.PNG';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
        <p className="para">Here you go</p>
      </main>
    </div>
  );
}

export default App;
