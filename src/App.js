// components
import HomePage from "./HomePage";
// contexts
import { ProvideLocale } from "./contexts/LocaleContexts";
// others
import "./App.css";

function App() {
  return (
    <div className="App">
      <ProvideLocale>
        <HomePage />
      </ProvideLocale>
    </div>
  );
}

export default App;
