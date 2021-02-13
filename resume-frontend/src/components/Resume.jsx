import React from 'react';

const api_url = 'http://localhost:3001/api/v1/resumes'

export class Resume extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      resumes: [],
      skills: [],
    }
  }

  componentDidMount(){
    this.getResumes();
  }

  getResumes(){
    fetch(api_url)
    .then(response => response.json())
    .then(response_items => {
      this.setState({
        resumes: Object.values(response_items)[0],
        skills: Object.values(response_items)[1],
      })
    });
  }

  render(){
    console.log(this.state)
    return(
      <div className="box" style={{marginTop:'50px'}}>
        <div className="field">
          <form id='signIn_form'
          autoComplete='off'>
            <div className="button-container">
              <button className='submitter' type='submit'>Create Resume</button>
            </div>
          </form>
        </div>
        <ul>
          {this.state.resumes.map(resume =>
            <li key={resume.id}>{resume.id}</li>)}
        </ul>
      </div>
    )
  }
}