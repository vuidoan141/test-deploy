import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({})
  axios.get('https://shrouded-tundra-48868.herokuapp.com/users').then(resp => {
    setUser(resp.data)
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`${user.name} - ${user.age}`}</p>
      </header>
    </div>
  );
}

export default App;
