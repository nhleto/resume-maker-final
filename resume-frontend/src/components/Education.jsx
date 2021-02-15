import React from "react";

export class Education extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    return(
      <div className="section">
        <div className="sub-section">
        <h2 className="title">Education</h2>
        <div className="info">
            <div className="top-row">
              <div className="control name">
                <label className='label'>Institution Name</label>
                <input type="text"
                id='institution Name'
                className='input'
                autoComplete='off'
                placeholder='Name of Institution'/>
                <span className='mui-Bottom'></span>
              </div>
              <div className="control phone">
                <label className='label'>Area of Study</label>
                <input type="text"
                id='major_input'
                className='input'
                autoComplete='off'
                placeholder='Major'/>
              <span className='mui-Bottom'></span>
              </div>
            </div>
            <div className="second-row">
              <div className="control location">
                <label className='label'>Begin Attendance</label>
                <input type="date"
                id='study_range_input'
                className='input'
                autoComplete='off'
                placeholder='Range'/>
                <span className='mui-Bottom'></span>
              </div>
              <div className="control location">
                <label className='label'>Graduation</label>
                <input type="date"
                id='study_range_input'
                className='input'
                autoComplete='off'
                placeholder='Range'/>
                <span className='mui-Bottom'></span>
              </div>
              <div className="control website">
                <label className='label'>GPA</label>
                <input type="number"
                step="0.01"
                min='0'
                id='gpa_input'
                className='input'
                autoComplete='off'
                placeholder='Grade Point Average'/>
                <span className='mui-Bottom'></span>
              </div>
            </div>  
        </div>
      </div>
    </div>
    )
  }
}