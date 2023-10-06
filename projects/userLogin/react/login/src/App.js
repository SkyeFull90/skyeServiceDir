import logo from './logo.svg';
import './App.css';
import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm />
        <img src={logo} className="App-logo" alt="logo" />
        <p className="">
         This was built with React 18 Lts and Tailwind Css. Click Learn React to learn more about React.
        </p>
        <a
          className="App-link"
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
