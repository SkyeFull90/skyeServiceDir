import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import TodoView from './components/TodoListView';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  //read all the Todos coming in from the server

  //post a todo to the server

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
