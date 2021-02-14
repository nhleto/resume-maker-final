import React from "react";

export class WorkExperience extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      <div className="section">
        <div className="sub-section">
        <h2 className="title">Work Experience</h2>
          <div className="info">

              <div className="top-row">
                <div className="control name">
                  <label className='label'>Company Name</label>
                  <input type="text"
                  id='company_input'
                  className='input'
                  autoComplete='off'
                  placeholder='Company Name'/>
                  <span className='mui-Bottom'></span>
                </div>
                <div className="control phone">
                  <label className='label'>Title</label>
                  <input type="text"
                  id='title_input'
                  className='input'
                  autoComplete='off'
                  placeholder='Job Title'/>
                <span className='mui-Bottom'></span>
                </div>
              </div>
              <div className="second-row"
                style={{justifyContent:'space-between'}}>
                <div className="control"
                  style={{flexGrow:'.5'}}>
                  <label className='label'>Responsibilities</label>
                  <textarea rows='5'
                  style={{color:'black', padding:'10px', fontSize:'15px',
                   fontWeight:'600', borderRadius:'5px'}}
                  id='responsibilities_input'
                  className='input'
                  autoComplete='off'
                  placeholder='List Responsibilities'/>
                </div>
                <div className="employment-range">
                  <div className="control"
                    style={{marginRight:'0'}}>
                    <label className='label'>Start of Employment</label>
                    <input type="date"
                    id='website_input'
                    className='input'
                    autoComplete='off'
                    placeholder='Website'/>
                    <span className='mui-Bottom'></span>
                  </div>
                  <div className="control">
                    <label className='label'>End of Employment</label>
                    <input type="date"
                    id='email_input'
                    className='input'
                    autoComplete='off'
                    placeholder='Email'/>
                    <span className='mui-Bottom'></span>
                  </div>
                </div>
              </div>  
          </div>
        </div>
      </div>
    )
  }
}