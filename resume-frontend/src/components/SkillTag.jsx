import React from "react";

export class SkillTag extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: Object.values(props)
    }
  }

  render(){
    return(
      <div className="tag-list">
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-danger" style={{fontSize:'.9em'}}>{this.state.name}</span>
            <span className="tag is-delete" style={{fontSize:'.9em'}}></span>
          </div>
        </div> 
      </div>
    )
  }
}