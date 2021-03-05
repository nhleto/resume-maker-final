import React from "react";
import shortid from 'shortid';
import { EducationSaved } from "./EducationSaved";
import SaveButton from "../Buttons/SaveButton";

export class Education extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        saved: false,
        institution_name: '',
        major: '',
        begin_attendance: '',
        graduation: '',
        gpa: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  formSubmit(e){
    e.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      institution_name: this.state.institution_name,
      major: this.state.major,
      begin_attendance: this.state.begin_attendance,
      graduation: this.state.graduation,
      gpa: this.state.gpa
    }, this.setState({
      saved: true,
      institution_name: '',
      major: '',
      begin_attendance: '',
      graduation: '',
      gpa: ''
    }))
  }

  render() {

    return (
      <div className="section">
        <div className="sub-section">
          <h2 className="title">Education</h2>
          <div className="sub-section">
            <div className="info">
              <div className="columns">
              <div className="column">
                <div className="columns">
                  <div className="column">
                    <div className="control name">
                      <label className='label'>Institution Name</label>
                      <input type="text"
                        value={this.state.institution_name}
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
                        value={this.state.major}
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
                        value={this.state.begin_attendance}
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
                        value={this.state.graduation}
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
                        value={this.state.gpa}
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
        </div>
        <SaveButton name={'Save Education'} saveData={this.formSubmit} />
        </div>
          {this.props.parentState.educations.map(component => 
            <EducationSaved
            key={component.id}
            parentState={this.state}
            deleteSection={this.props.deleteSection}
            component={component}
            onSubmit={this.props.onSubmit}
            editSection={this.props.editSection} />
          )}
      </div>
    )
  }
}