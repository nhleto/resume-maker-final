import './App.scss';
import React from 'react';
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { WorkExperience } from "./components/WorkExperience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { AddButton } from "./components/AddButton";

const api_url = 'http://localhost:3001/api/v1/resumes'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      education: [],
      work_experience: [],
      headers: [],
      skill_name: []
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
        body: JSON.stringify(this.state.resume)
    }).then(response => console.log(response))
  }

  onInputChange(data, name, index){
    let prevState = [...this.state.education]
    prevState.push(data)
    this.setState({
      education: prevState.slice(-1)
    }, () => {
      console.log(this.state)
    })
  }

  addSection(counter_name, index, state_key){
    console.log(counter_name, index, state_key)
    let prevState = [...this.state.education]
    if (index === undefined){
      prevState.push({['education_0']: null})
      this.setState({
        education: prevState
       }, ()=> {
         console.log(this.state)
       })
    } else {
      prevState.push({[state_key.concat(index + 1)]: null})
      state_key.concat(index)
      this.setState({
        education: prevState
       }, ()=> {
         console.log(this.state)
       })
    }
  }

  deleteSection(counter_name, index, state_key, target){
    let array = [...this.state.education];
    let newState = array.splice(index, 1)

    this.setState({ 
      education: newState
     }, ()=>{
       console.log(this.state.resume)
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
            {this.state.education.length === 0 ?
              <div className="section">
                <div className="sub-section" style={{flexGrow:'.7'}}>
                  <AddButton addSection={this.addSection}
                  value={'education_counter'}
                  name={'Add Education +'}/>
                </div>
              </div> : null
              }
            {this.state.education.map((comp, i) => 
              <Education onInputChange={this.onInputChange}
              name={`education_${i}`}
              key={i}
              index={i + 1}
              keyLength={this.state.education.length}
              deleteSection={this.deleteSection}
              addSection={this.addSection}
              parentState={this.state} />
            )}
            {this.state.work_counter === 0 ?
              <div className="section">
                <div className="sub-section" style={{flexGrow:'.7'}}>
                  <AddButton addSection={this.addSection}
                  value={'work_counter'}
                  name={'Add Work Experience +'}/> 
                </div>
              </div> : null
              }          
            {[...Array(this.state.work_counter)].map((component, i) =>
              <WorkExperience onInputChange={this.onInputChange}
              key={i}
              index={i}
              deleteSection={this.deleteSection}
              addSection={this.addSection} 
              parentState={this.state}             
              />
            )}
            <Skills onInputChange={this.onInputChange} />
            <div className="center">
              <button className='button'
              onClick={this.formSubmit}
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
