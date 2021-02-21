import React from "react";
import { AddButton } from "./AddButton";
import { DeleteButton } from "./DeleteButton";

export class Education extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        // institution_name: '',
        // major: '',
        // begin_attendance: '',
        // graduation: '',
        // gpa: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    const value = evt.target.value;
    let newEducation =  {...this.state[`education_${this.props.index}`]};
    let newest = { ...newEducation, [evt.target.name]: value}
    this.setState({
      [`education_${this.props.index}`]: newest
    }, () => {
      this.props.onInputChange(this.state, 'education');
    })
  }

  render() {
    let button;
    let edCounter = parseInt(this.props.parentState.education_counter)
    if (this.props.index + 1 === this.props.parentState.education_counter) {
      button = <AddButton name={'Add Education +'}
        value={'education_counter'}
        index={this.props.index}
        state_key={'education_'}
        addSection={this.props.addSection} />
    }
    return (
      <div className="section">
        <div className="sub-section">
          <h2 className="title">Education</h2>
          <div className="info">
            <div className="columns">
              <div className="column">
                <div className="columns">
                  <div className="column">
                    <div className="control name">
                      <label className='label'>Institution Name</label>
                      <input type="text"
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
          {button}
          <DeleteButton
            name={'Delete Education'}
            value={'education_counter'}
            state_key={'education_'}
            index={this.props.index}
            target={this}
            deleteSection={this.props.deleteSection} />
        </div>
      </div>
    )
  }
}