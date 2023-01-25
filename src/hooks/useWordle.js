import { useState } from "react";
import { toast } from "react-toastify";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => ({
      key: letter,
      color: "slate",
    }));

    formattedGuess.forEach((letterObj, index) => {
      if (solutionArray[index] === letterObj.key) {
        formattedGuess[index].color = "green";
        solutionArray[index] = null;
      }
    });

    formattedGuess.forEach((letterObj, index) => {
      if (
        solutionArray.includes(letterObj.key) &&
        letterObj.color !== "green"
      ) {
        formattedGuess[index].color = "yellow";
        solutionArray[solutionArray.indexOf(letterObj.key)] = null;
      }
    });

    return formattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prev) => {
      let newGuesses = [...prev];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prev) => [...prev, currentGuess]);
    setTurn((prev) => prev + 1);
    setUsedKeys((prev) => {
      let newKeys = { ...prev };
      formattedGuess.forEach((letterObj) => {
        const currentColor = newKeys[letterObj.key];
        if (letterObj.color === "green") {
          return (newKeys[letterObj.key] = "green");
        }
        if (letterObj.color === "yellow" && currentColor !== "green") {
          return (newKeys[letterObj.key] = "yellow");
        }
        if (
          letterObj.color === "slate" &&
          currentColor !== "green" &&
          currentColor !== "yellow"
        ) {
          return (newKeys[letterObj.key] = "slate");
        }
      });

      return newKeys;
    });
    setCurrentGuess("");
  };

  const handleKeyup = ({ key }) => {
    if (key === "Backspace") {
      return setCurrentGuess((prev) => prev.slice(0, -1));
    }

    if (key === "Enter") {
      if (turn > 5) {
        return toast.warn("No more turns!");
      }
      if (history.includes(currentGuess)) {
        return toast.warn("Already used the word!");
      }
      if (currentGuess.length !== 5) {
        return toast.warn("Word must be 5 letter long");
      }
      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup, usedKeys };
};

export { useWordle };
