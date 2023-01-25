import { Wordle } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const noOfTries = 6;
  const wordLength = 5;

  return (
    <>
      <ToastContainer />
      <Wordle solution={"hello"} />
    </>
  );
};

export default App;
