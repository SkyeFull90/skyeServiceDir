import logo from './logo.svg';
import './App.css';
import Login from "./Login";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome back User please login
        </p>
        <Login />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This web app was built React 18 Lts and Tailwind CSS. Click Learn React, to learn more.
        </p>
        <a
          className="App-link shadow-2xl shadow-cyan-500/50"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
