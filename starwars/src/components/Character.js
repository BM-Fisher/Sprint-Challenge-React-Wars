import React from "react";
import styled from "styled-components";

const Card = styled.div`
  
  background: #e8dede ;
  color: #ea924b;
  padding: 5px;
  margin: 5px;
  text-align: center;
  width: 200px;
  opacity: 0.6;
`;
//e8dede
const Name = styled.h2`
  margin: 2px;
  text-align: center;
  font-size: 20px;
`;

const About = styled.h4`
  color: #544f4f;
  font-size: 14px;
`;

function CharacterCard({ props }) {
  return (
    <Card>
      <Name>{props.name}</Name>
      <About>Gender: {props.gender}</About>
      <About>Born: {props.birth_year}</About>
      <About>Hair Color: {props.hair_color}</About>
      <About>Eye Color: {props.eye_color}</About>
      <About>Skin Color: {props.skin_color}</About>
    </Card>
  );
}

export { CharacterCard };