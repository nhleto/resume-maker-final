import React from "react";
import uuid from 'react-uuid'

export class SkillTag extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: Object.values(props)
    }
  }

  render(){
    return(
      <div key={uuid()} className="tag-list">
        <span key={uuid()} className="tag">{this.state.name}</span>
      </div>
    )
  }
}