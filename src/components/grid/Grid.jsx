import React from "react";
import { Row } from "../row/Row";

const Grid = ({ currentGuess, guesses, turn }) => {
  return (
    <>
      {guesses.map((guessArr, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
        return <Row key={index} guessArr={guessArr} />;
      })}
    </>
  );
};

export { Grid };
