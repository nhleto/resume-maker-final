import React, { useState, useEffect } from "react";
import SkillTag from "./SkillTag";
import shortid from 'shortid';

export const Skills = (props) => {
  const [skills, setSkills] = useState([])
  const skillVal = document.querySelector('#skill_name')
  const {formSubmit, parentState} = props;
  const initialState = ''

  const enterSkill = (e) => {
    if (e.keyCode === 13 ){
      if (skillVal.value !== ''){
        setSkills( prevState => ([
          ...prevState,
          {id: shortid.generate(),
          name: skillVal.value}
        ]))
      }
    }
  }

  const submit = () => {
    if (skillVal.value !== ''){
      setSkills( prevState => ([
        ...prevState,
        {id: shortid.generate(),
        name: skillVal.value}
      ]))
    }
  }

  const deleteTag = (data) => {
    console.log(data);
    skills.forEach((tag, i) => {
      if (data.id === tag.id){
        let prevSkills = [...skills]
        prevSkills.splice(i, 1)
        setSkills(prevSkills)
      }
    })
  }

  useEffect(() => {
    formSubmit(skills);
  }, [skills, formSubmit])


  return(
    <div className="section">
      <div className="sub-section">
        <h2 className="title">Skills</h2>
        <div className="info skill-list">
          <button className='skills' onClick={submit}>
            Add Skills +
          </button>
          <input id='skill_name'
          defaultValue={initialState}
          onKeyUp={enterSkill}
          type="text" 
          style={{marginLeft:'20px'}} />
          <span className="mui-Bottom"></span>
        </div>
        <div className="tag-container">
          <div className="tag-list">
            {parentState.map(skill=> (
              <SkillTag
              key={skill.id}
              skill={skill}
              deleteTag={deleteTag}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
