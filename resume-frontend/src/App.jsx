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
      resume: {
        education: {
          education_0:{}
        },
        work_experience: {},
        headers: {},
        skill_name: []
      },
      education_counter: 1,
      ed_counter: [0],
      work_counter: 1
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

  onInputChange(data, name){
    console.log(data)
    let updatedState = Object.assign(this.state.resume.education, data)
    console.log(updatedState)
    // this.setState({ resume: updatedState })
    // this.setState({
    //   resume: updatedState
    // }, () => {
    //   console.log(this.state)
    // })
  }

  addSection(counter_name, index, state_key){
    console.log(counter_name, index, state_key)
    // let addKey = state_key
    let addCount = this.state[counter_name]
    // let filtered = {...this.state.resume};
    // [...Array(this.state.education_counter)].map((component, i) => 
    //   filtered[`education_${i}`] = {...this.state.resume[`education_${i}`]}
    // )
    let ed_counter = [];
    for (let i = 0; i < this.state.education_counter + 1; i++){
      ed_counter.push(i)
    }
    // this.setState({ education_counter: ed_counter })
    this.setState({ 
      [counter_name]: addCount += 1,
      ed_counter: ed_counter
     }, ()=> {
       console.log(this.state)
     })
  }

  deleteSection(counter_name, index, state_key, target){
    let deleteKey = state_key.concat(index)
    let currentState = {...this.state}
    delete currentState.resume[deleteKey]
    let negCount = this.state[counter_name];

    let _edCounter = this.state.ed_counter;
    let index2 = _edCounter.indexOf(index)
    _edCounter.splice(index2, 1)
    console.log(_edCounter)

    this.setState({ 
      [counter_name]: negCount -= 1,
      ed_counter: _edCounter,
      resume: currentState.resume
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
            {this.state.education_counter === 0 ?
              <div className="section">
                <div className="sub-section" style={{flexGrow:'.7'}}>
                  <AddButton addSection={this.addSection}
                  value={'education_counter'}
                  name={'Add Education +'}/>
                </div>
              </div> : null
              }
            {this.state.ed_counter.map((comp, i) => 
              <Education onInputChange={this.onInputChange}
              name={`education_${i}`}
              key={i}
              index={i}
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
