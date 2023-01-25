import { Wordle } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useThemeContext } from "./context";

const App = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <main className={`h-[100vh] ${theme === "dark" ? "bg-gray-700" : ""}`}>
      <div className="relative">
        <h1
          className={`text-3xl text-center mb-4 pt-4 ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          Wordle App
        </h1>
        <button
          className="px-2 py-1 rounded bg-slate-400 text-white absolute top-4 right-2"
          onClick={() => {
            if (theme === "dark") {
              setTheme("light");
            }
            if (theme === "light") {
              setTheme("dark");
            }
          }}
        >
          Theme change
        </button>
      </div>
      <ToastContainer />
      <Wordle solution={"hello"} />
    </main>
  );
};

export default App;
