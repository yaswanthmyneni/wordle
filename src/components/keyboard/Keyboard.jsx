import React from "react";

const Keyboard = ({ usedKeys, handleKeyup }) => {
  const rowOne = "qwertyuiop".split("");
  const rowTwo = "asdfghjkl".split("");
  const rowThree = "zxcvbnm".split("");

  const keyCss = "p-2 sm:p-4 rounded bg-key-bg cursor-pointer text-white";

  return (
    <section className="w-fit mx-auto">
      <div className="flex gap-1 flex-wrap sm:gap-2 mt-4">
        {rowOne.map((key) => {
          const color = usedKeys[key];
          return (
            <p
              key={key}
              className={`${keyCss} ${
                color === "green"
                  ? "bg-green-500"
                  : color === "yellow"
                  ? "bg-yellow-500"
                  : color === "slate"
                  ? "bg-slate-500"
                  : ""
              }`}
              onClick={() => {
                handleKeyup({ key });
              }}
            >
              {key.toUpperCase()}
            </p>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 w-fit mx-auto">
        {rowTwo.map((key) => {
          const color = usedKeys[key];
          return (
            <p
              key={key}
              className={`${keyCss} ${
                color === "green"
                  ? "bg-green-500"
                  : color === "yellow"
                  ? "bg-yellow-500"
                  : color === "slate"
                  ? "bg-slate-500"
                  : ""
              }`}
              onClick={() => {
                handleKeyup({ key });
              }}
            >
              {key.toUpperCase()}
            </p>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
        <p
          className={keyCss}
          onClick={() => {
            handleKeyup({ key: "Enter" });
          }}
        >
          ENTER
        </p>
        {rowThree.map((key) => {
          const color = usedKeys[key];
          return (
            <p
              key={key}
              className={`${keyCss} ${
                color === "green"
                  ? "bg-green-500"
                  : color === "yellow"
                  ? "bg-yellow-500"
                  : color === "slate"
                  ? "bg-slate-500"
                  : ""
              }`}
            >
              {key.toUpperCase()}
            </p>
          );
        })}
        <p
          className={keyCss}
          onClick={() => {
            handleKeyup({ key: "Backspace" });
          }}
        >
          Del
        </p>
      </div>
    </section>
  );
};

export { Keyboard };
