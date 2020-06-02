import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { CharacterCard } from "../src/components/Character";
import styled from "styled-components";

const CardDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const App = () => {

  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/swapi.py4e.com/api/people")
      .then((response) => {
        console.log('API data response:', response)
      // const characterInfo = response.data.results
      // setCharacter(characterInfo);
        setCharacterData(response.data.results);
      })
      .catch((error) => {
        console.log('I sense an imbalance in The Force', error)
      });
  }, []);

  //Try to think through what state you'll need for this app before starting. Then build out the state properties here.
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
       <h1>Characters</h1>
      <CardDiv>
        {characterData.map((characters, index) => (
          <CharacterCard props={characters} key={index} />
        ))}
      </CardDiv>
    </div>
  );
};

export default App;