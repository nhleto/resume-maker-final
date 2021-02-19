import React from "react";
import { SkillTag } from "./SkillTag";
import uuid from 'react-uuid'

export class Skills extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      skill_name: [],
    }
    this.addSkill = this.addSkill.bind(this)
    this.enterSkill = this.enterSkill.bind(this)
  }

  enterSkill(e){
    if (e.keyCode === 13){
      const skillVal = document.querySelector('#skill_name')
      if (skillVal.value !== ''){
        let newName = [...this.state.skill_name, skillVal.value]
        this.setState({
          skill_name: newName
        }, () => {
          this.props.onInputChange(this.state);
        });
        skillVal.value = ''
      }
    }
  }

  addSkill(){
    const skillVal = document.querySelector('#skill_name')
    if (skillVal.value !== ''){
      let newName = [...this.state.skill_name, skillVal.value]
      this.setState({
        skill_name: newName
      }, () => {
        this.props.onInputChange(this.state);
      });
      skillVal.value = ''
    }
  }

  render(){

    return(
      <div className="section">
        <div className="sub-section">
          <h2 className="title">Skills</h2>
          <div className="info skill-list">
            <button className='skills' onClick={this.addSkill}>
              Add Skills +
            </button>
            <input id='skill_name'
            onKeyUp={this.enterSkill}
            type="text" 
            style={{marginLeft:'20px'}} />
            <span className="mui-Bottom"></span>
          </div>
          <div className="tag-container">
            <div className="tag-list">
              {this.state.skill_name.map(skill=> (
                <SkillTag key={uuid()} skill={skill}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}