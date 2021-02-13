import './App.css';
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

// const api_url = 'http://localhost:3001/api/v1/resumes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <Header/>
    </div>
  );
}

export default App;
