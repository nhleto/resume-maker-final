import React from "react";

export class Skills extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    return(
      <div className="section">
        <div className="sub-section">
          <h2 className="title">Skills</h2>
          <div className="info"
          style={{border:'none', paddingLeft:'0', marginTop:'0'}}>
            <button>
              <h5 className='skills'>Add Skills +</h5>
            </button>
          </div>
        </div>
      </div>
    )
  }
}