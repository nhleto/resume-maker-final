import React, { useState, useEffect } from "react";
import SkillTag from "./SkillTag";
import shortid from 'shortid';

export const Skills = (props) => {
  const [skills, setSkills] = useState([])
  const skillVal = document.querySelector('#skill_name')

  const enterSkill = (e) => {
    if (e.keyCode === 13 ){
      if (skillVal.value !== ''){
        setSkills([...skills, skillVal.value]);
        skillVal.value = ''
      }
    }
  }

  const submit = () => {
    if (skillVal.value !== ''){
      setSkills([...skills, skillVal.value]);
      skillVal.value = '';
    }
  }

  useEffect(() => {
    props.formSubmit(skills);
  }, [skills])

  return(
    <div className="section">
      <div className="sub-section">
        <h2 className="title">Skills</h2>
        <div className="info skill-list">
          <button className='skills' onClick={submit}>
            Add Skills +
          </button>
          <input id='skill_name'
          onKeyUp={enterSkill}
          type="text" 
          style={{marginLeft:'20px'}} />
          <span className="mui-Bottom"></span>
        </div>
        <div className="tag-container">
          <div className="tag-list">
            {skills.map(skill=> (
              <SkillTag key={shortid()} skill={skill}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
