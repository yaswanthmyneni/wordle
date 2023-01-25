import React from "react";

const Row = ({ guessArr, currentGuess }) => {
  const squareBoxCss =
    "flex justify-center items-center border-2 border-slate-400 w-10 h-10 rounded";

  if (guessArr) {
    return (
      <section className="flex justify-center items-center gap-2 mt-2">
        {guessArr.map((letterObj, index) => {
          return (
            <div
              key={index}
              className={`${squareBoxCss} bg-${letterObj.color}-400 text-white`}
            >
              {letterObj.key.toUpperCase()}
            </div>
          );
        })}
      </section>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <section className="flex justify-center items-center gap-2 mt-2">
        {letters.map((letter, index) => {
          return (
            <div key={index} className={squareBoxCss}>
              {letter.toUpperCase()}
            </div>
          );
        })}
        {[...Array(5 - letters.length)].map((_, index) => {
          return <div key={index} className={squareBoxCss}></div>;
        })}
      </section>
    );
  }

  return (
    <section className="flex justify-center items-center gap-2 mt-2">
      <div className={squareBoxCss}></div>
      <div className={squareBoxCss}></div>
      <div className={squareBoxCss}></div>
      <div className={squareBoxCss}></div>
      <div className={squareBoxCss}></div>
    </section>
  );
};

export { Row };
