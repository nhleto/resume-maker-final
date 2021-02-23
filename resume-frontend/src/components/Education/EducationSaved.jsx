import React, { Component } from 'react'

export class EducationSave extends Component {
  constructor(props){
    super(props)
    
  }

  render() {
    const { begin_attendance, gpa, graduation, institution_name, major } = this.props.parentState
    return (
      <div className="info">
        <div className="columns">
        <div className="column">
          <div className="columns">
            <div className="column">
              <div className="control name">
                <label className='label'>Institution Name</label>
                <input type="text"
                  defaultValue={institution_name}
                  id='institution Name'
                  onChange={this.props.onInputChange}
                  name='institution_name'
                  className='input'
                  autoComplete='off'
                  placeholder='Name of Institution' />
                <span className='mui-Bottom'></span>
              </div>
            </div>
            <div className="column">
              <div className="control phone">
                <label className='label'>Area of Study</label>
                <input type="text"
                  id='major_input'
                  defaultValue={major}
                  onChange={this.props.onChange}
                  name='major'
                  className='input'
                  autoComplete='off'
                  placeholder='Major'/>
                <span className='mui-Bottom'></span>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="control location">
                <label className='label'>Start Date</label>
                <input type="date"
                  defaultValue={begin_attendance}
                  onChange={this.props.onChange}
                  name='begin_attendance'
                  id='study_range_input'
                  className='input'
                  autoComplete='off'
                  placeholder='Range' />
                <span className='mui-Bottom'></span>
              </div>
            </div>
            <div className="column">
              <div className="control location">
                <label className='label'>Graduation</label>
                <input type="date"
                  defaultValue={graduation}
                  onChange={this.props.onChange}
                  name='graduation'
                  id='study_range_input'
                  className='input'
                  autoComplete='off'
                  placeholder='Range' />
                <span className='mui-Bottom'></span>
              </div>
            </div>
            <div className="column">
              <div className="control website">
                <label className='label'>GPA</label>
                <input type="number"
                  onChange={this.props.onChange}
                  defaultValue={gpa}
                  name='gpa'
                  step="0.01"
                  min='0'
                  id='gpa_input'
                  className='input'
                  autoComplete='off'
                  placeholder='Grade Point Average' />
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

// export default EducationSave
