import React from "react";
import { Row } from "../row/Row";

const Grid = ({ currentGuess, guesses, turn }) => {
  return (
    <section className="mb-8">
      {guesses.map((guessArr, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
        return <Row key={index} guessArr={guessArr} />;
      })}
    </section>
  );
};

export { Grid };
