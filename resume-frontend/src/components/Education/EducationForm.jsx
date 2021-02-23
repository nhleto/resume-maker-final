import React, { Component } from 'react'

export class EducationForm extends Component {
  render() {
    return (
      <div className="columns">
      <div className="column">
        <div className="columns">
          <div className="column">
            <div className="control name">
              <label className='label'>Institution Name</label>
              <input type="text"
                // value={this.state.institution_name}
                id='institution Name'
                onChange={this.handleChange}
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
                // value={this.state.major}
                onChange={this.handleChange}
                name='major'
                className='input'
                autoComplete='off'
                placeholder='Major' />
              <span className='mui-Bottom'></span>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="control location">
              <label className='label'>Start Date</label>
              <input type="date"
                // value={this.state.begin_attendance}
                onChange={this.handleChange}
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
                // value={this.state.graduation}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                // value={this.state.major}
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
    )
  }
}

// export default EducationForm
