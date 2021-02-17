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
      education_sections: {
        counter: 1,
        components: []
      }
    }
  
    this.formSubmit = this.formSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.addSection = this.addSection.bind(this)
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
  }

  addSection(){
    const { count } = this.state.education_sections.counter
    const { components } = this.state.education_sections.components
    this.setState({ counter: this.state.education_sections.counter += 1 })
    let edComponents = [... this.state.education_sections.components, <Header/>]
    for (let i = 0; i < count; i++) {
      this.setState({
        components: edComponents
      })      
    }
    // this.setState({ components: edComponents })
    // console.log(edComponents)
    console.log(this.state.education_sections)
    // console.log(this.state.education_sections.counter, this.state.education_sections.components )
  }

  render(){

    return (
      <div className="app">
        <header className="App-header">
          <Nav/>
        </header>
          <Header onInputChange={this.onInputChange} />
          <Education onInputChange={this.onInputChange} 
            addSection={this.addSection} 
            counter={this.state.educations} />
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
