import React from "react";

const Row = ({ guessArr, currentGuess }) => {
  const squareBoxCss = `flex justify-center items-center border-2 border-slate-500 w-10 h-10 rounded`;

  if (guessArr) {
    return (
      <section className="flex justify-center items-center gap-2 mt-2">
        {guessArr.map((letterObj, index) => {
          return (
            <div
              key={index}
              className={`${squareBoxCss} ${
                letterObj.color === "green"
                  ? "bg-green-500 border-green-500"
                  : letterObj.color === "yellow"
                  ? "bg-yellow-500 border-yellow-500"
                  : "bg-slate-500 border-slate-500"
              } text-white`}
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
