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
      name: 'Title of Resume',
      header: [],
      education : [],
      work_experience: [],
      skills: []
    }
    this.formSubmit = this.formSubmit.bind(this)
    this.getData = this.getData.bind(this)
    this.assignValues = this.assignValues.bind(this)
  }

  getData(data){
    // data.preventDefault()
    this.setState({
      header: [...this.state.header, data]
    })
    console.log(this.state)
  }

  formSubmit(e){
    e.preventDefault()
    let inputs = document.querySelectorAll('input, textarea')
    let values = []
    inputs.forEach(element => {
      values.push(element.value)
    });
    this.assignValues(values)
    this.submitter()
  }

  assignValues(values){
    console.log(values)
    this.setState({
      header: values.slice(0, 5),
      education: values.slice(5, 10),
      work_experience: values.slice(10, 15)
    })
  }

  async submitter(){
    console.log(this.state)
    await fetch(api_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
    }).then(response => console.log(response))
  }

  onInputChange(value){
    this.setState({
      header: value
    })
    console.log(this.state)
  }

  render(){
    return (
      <div className="app">
        <header className="App-header">
          <Nav/>
        </header>
          <Header onInputChange={this.onInputChange.bind(this)}/>
          <Education />
          <WorkExperience />
          <Skills />
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
