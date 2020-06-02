import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


const App = () => {

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
    .get('https://cors-anywhere.herokuapp.com/swapi.py4e.com/api/people')
    .then(response => {
      console.log('API data response:', response)
      // const characterInfo = response.data.results
      // setCharacter(characterInfo);
      setCharacter(response.data.results);
    })
    .catch(error => {
      console.log('I sense an imbalance in The Force', error)
    });
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
