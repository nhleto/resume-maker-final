import './App.scss';
import React from 'react';
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { WorkExperience } from "./components/WorkExperience";
import { Education } from "./components/Education/Education";
import { Skills } from "./components/Skills";


const api_url = 'http://localhost:3001/api/v1/resumes'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      education: [],
      work_experience: [],
      header: [],
      skill_name: [],
    }
    this.formSubmit = this.formSubmit.bind(this)
    this.deleteSection = this.deleteSection.bind(this)
    this.editSection = this.editSection.bind(this)
  }

  formSubmit(data){
    console.log(data)
    let keys = Object.keys(data).join()
    switch (true) {
      case /gpa/.test(keys):
        let eduState = [...this.state.education]
        this.setState({ education: [data, ...eduState] })
        break;
      case /responsibilities/.test(keys):
        let workState = [...this.state.work_experience];
        this.setState({ work_experience: [...workState, data] })
        break;
      case /email/.test(keys):
        let headerState = [...this.state.header]
        this.setState({ header: [...headerState, data] })
        break;
      default:
        let skills = [...this.state.skill_name]
        this.setState({ skill_name: [...skills, data] })
        break;
    }
  }

  async submitter(){
    console.log(this.state)
    await fetch(api_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.resume)
    }).then(response => console.log(response))
  }

  editSection(data){
    console.log(data)
  }

  deleteSection(data, section_name){
    let currentState = [...this.state[section_name]]
    currentState.map((component, i) => {
      if (component.id === data.id){
        currentState.splice(i, 1)
        this.setState({ [section_name]: currentState })
      }
    })
  }

  render(){

    return (
      <div className="app">
        <header className="App-header">
          <Nav/>
        </header>
        <div className="columns is-centered" style={{margin:'0'}}>
          <div className="column is-three-fifths">
            <Header onInputChange={this.onInputChange} />

            <Education
            onInputChange={this.onInputChange}
            name={`education`}
            onSubmit={this.formSubmit}
            deleteSection={this.deleteSection}
            parentState={this.state}
            editSection={this.editSection} />

            <WorkExperience 
            onInputChange={this.onInputChange}
            deleteSection={this.deleteSection}
            addSection={this.addSection} 
            parentState={this.state} />

            <Skills onInputChange={this.onInputChange} />
            <div className="center">
              <button className='button'
              onClick={this.grabState}
              type='submit'
              style={{color:'black', marginTop:'10px'}}>
              Create Resume/Header</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
