import './App.scss';
import React from 'react';
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { WorkExperience } from "./components/Work/WorkExperience";
import { Education } from "./components/Education/Education";
import { Skills } from "./components/Skills";


const api_url = 'http://localhost:3001/api/v1/resumes'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      educations: [],
      work_experiences: [],
      headers: [],
      skills: [],
    }
    this.submitter = this.submitter.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
    this.deleteSection = this.deleteSection.bind(this)
    this.editSection = this.editSection.bind(this)
  }

  formSubmit(data){
    let keys = Object.keys(data).join()
    switch (true) {
      case /gpa/.test(keys):
        let eduState = [...this.state.educations]
        this.setState({ educations: [...eduState, data] })
        break;
      case /company/.test(keys):
        let workState = [...this.state.work_experiences];
        this.setState({ work_experiences: [...workState, data] })
        break;
      case /email/.test(keys):
        this.setState({ headers: [data] })
        break;
      default:
        this.setState({ skills: data })
        break;
    }
  }

  async submitter(){
    // console.log(this.formatParams(this.state))
    console.log(this.state)
    await fetch(api_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.headers)
    }).then(response => console.log(response))
  }

  editSection(component, state, type){
    let currentState = [...this.state[type]]
    delete state.saved
    state['id'] = component.id
    this.state[type].forEach((element, i) => {
      if (element.id === component.id){
        currentState.splice(i, 1, state)
        this.setState({ [type]: currentState })
      }
    })
  }

  deleteSection(data, section_name){
    let currentState = [...this.state[section_name]]
    currentState.forEach((component, i) => {
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
          <div className="column is-one-quarter"></div>
          <div className="column is-half">
            <Header formSubmit={this.formSubmit} />

            <Education
            onSubmit={this.formSubmit}
            deleteSection={this.deleteSection}
            parentState={this.state}
            editSection={this.editSection} />

            <WorkExperience
            deleteSection={this.deleteSection}
            onSubmit={this.formSubmit}
            parentState={this.state}
            editSection={this.editSection} />

            <Skills
            parentState={this.state.skills}
            formSubmit={this.formSubmit} />
            
            <div className="center">
              <button className='button'
              onClick={this.submitter}
              type='submit'
              style={{color:'black', marginTop:'10px'}}>
              Create Resume/Header</button>
            </div>
          </div>
          <div className="column is-one-quarter">
            {/* <div className="section" id="options">
              Poggers
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
