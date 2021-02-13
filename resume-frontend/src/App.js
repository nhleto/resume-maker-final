import './App.css';
import { Header } from "./components/Header";
import { Resume } from "./components/Resume";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Resume/>
    </div>
  );
}

export default App;
