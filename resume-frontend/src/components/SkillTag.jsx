import React, { useState } from "react";

export const Skilltag = (props) => {

  const [name] = useState([props.skill])

  return(
    <div className="tag-list">
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-danger" style={{fontSize:'.9em'}}>{name}</span>
          <span className="tag is-delete" style={{fontSize:'.9em'}}></span>
        </div>
      </div> 
    </div>
  )
}

export default Skilltag;