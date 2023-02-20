import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Initialize } from "./features/initialize/Initialize";

function App() {
  return (
    <div className="App">
      <Counter />
      <Initialize />
    </div>
  );
}

export default App;
