import React from "react";
import { SkillTag } from "./SkillTag";
import uuid from 'react-uuid'

export class Skills extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      name: [],
    }
    this.addSkill = this.addSkill.bind(this)
  }

  addSkill(e){
    e.stopPropagation()
    e.preventDefault()
    const skillVal = document.querySelector('#skill_name')
    if (skillVal.value !== ''){
      let newName = [...this.state.name, skillVal.value]
      this.setState({
        name: newName
      })  
      skillVal.value = ''
    }
  }

  render(){
    // console.log(this.state)
    return(
      <div className="section">
        <div className="sub-section">
          <h2 className="title">Skills</h2>
          <div className="info skill-list">
            <button className='skills' onClick={this.addSkill}>
              Add Skills +
            </button>
            <input id='skill_name' type="text" style={{marginLeft:'20px'}} />
            <span className="mui-Bottom"></span>
          </div>
          <div className="tag-container">
            <div className="tag-list">
              {this.state.name.map(skill=> (
                <SkillTag key={uuid()} skill={skill}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}