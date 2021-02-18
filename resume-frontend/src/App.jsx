import './App.css';
import React from 'react';
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { WorkExperience } from "./components/WorkExperience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";

const api_url = 'http://localhost:3001/api/v1/resumes'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      values: { resume: {} },
      education_counter: 1,
    }
    this.formSubmit = this.formSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.addSection = this.addSection.bind(this)
    this.deleteSection = this.deleteSection.bind(this)
  }

  formSubmit(e){
    e.preventDefault()
    this.submitter()
  }

  async submitter(){
    console.log(this.state)
    await fetch(api_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.values)
    }).then(response => console.log(response))
  }

  onInputChange(data){
    let newOne = Object.assign(this.state.values.resume, data)
    this.setState({
      resume: newOne
    })
    console.log(this.state.values)
  }

  addSection(){
    let addCount = this.state.education_counter
    this.setState({ 
      education_counter: addCount += 1
    })
    setTimeout(() => {
      let edButtons = document.querySelectorAll("#edButton")
      edButtons.forEach( button => { if (edButtons.length > 1)
        { edButtons[0].remove()} })}, 25);
  }

  deleteSection(){
    let negCount = this.state.education_counter
    this.setState({
      education_counter: negCount -= 1
    })
  }

  render(){

    return (
      <div className="app">
        <header className="App-header">
          <Nav/>
        </header>
          <Header onInputChange={this.onInputChange} />
          {[...Array(this.state.education_counter)].map((component, i) => 
            <Education onInputChange={this.onInputChange}
            key={i}
            deleteSection={this.deleteSection}
            addSection={this.addSection} 
            counter={this.state.educations} />
          )}
          <WorkExperience onInputChange={this.onInputChange} />
          <Skills onInputChange={this.onInputChange} />
          <div className="center">
            <button className='button'
            onClick={this.formSubmit}
            type='submit'
            style={{color:'black', marginTop:'10px'}}>
            Create Resume/Header</button>
          </div>
      </div>
    );
  }
}

export default App;
