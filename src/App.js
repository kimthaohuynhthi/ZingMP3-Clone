// components
import HomePage from "./HomePage";
// contexts
import { ProvideLocale } from "./contexts/LocaleContexts";
// others
import "./App.css";

const App = () => (
  <div className="App">
    <ProvideLocale>
      <HomePage />
    </ProvideLocale>
  </div>
);

export default App;
