import logo from './logo.svg';
import './App.css';
import {addUser, removeUser, getUsers} from "./userService";
import {useEffect, useState} from "react";

function App() {
  const [currentUsers, setCurrentUsers] = useState([]);

  useEffect(() => {
    addUser("Alice ");
    addUser("Bob ");
    addUser("Charlie ");
    setCurrentUsers(getUsers);
  }, []);

  function handleRemoveUser(user){
    removeUser(user);
    setCurrentUsers(getUsers);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>the Current Users are: </h1>
      <ul>
        {currentUsers.map((user, index) => (
            <li key={index}>
              {user}
              <button onClick={() => handleRemoveUser(user)}>Remove</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
