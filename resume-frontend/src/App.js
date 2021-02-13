import './App.css';
import React from 'react';
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { WorkExperience } from "./components/WorkExperience";

const api_url = 'http://localhost:3001/api/v1/resumes'

class App extends React.Component{
  constructor(props){
    super(props)

    // this.getData = this.getData.bind(this)
  }

  // getData(val){
  //   console.log(val)
  // }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Nav/>
        </header>
        <Header api_url={api_url} />
        {/* <WorkExperience/> */}
      </div>
    );
  }
}

export default App;
