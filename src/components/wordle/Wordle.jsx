import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useWordle } from "../../hooks";
import { Grid } from "../grid/Grid";
import { Keyboard } from "../keyboard/Keyboard";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      window.removeEventListener("keyup", handleKeyup);
      toast.success("Congo! Your guess is correct.");
    }

    if (turn > 5) {
      window.removeEventListener("keyup", handleKeyup);
      toast.warn("Your attempts are completed!");
    }

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  });

  return (
    <div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keyboard usedKeys={usedKeys} handleKeyup={handleKeyup} />
    </div>
  );
};

export { Wordle };
