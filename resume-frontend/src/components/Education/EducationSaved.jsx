import React, { Component } from 'react'
import { SaveButton } from "../Buttons/SaveButton";
import {DeleteButton} from '../Buttons/DeleteButton'
import shortid from "shortid";

export class EducationSaved extends Component {
  constructor(props){
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

  handleChange(evt){
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
      saved: true
    }))
  }

  render() {
    let button;
    this.state.saved === true ? button = null : button = <SaveButton saveData={this.formSubmit} />
    let defValue;
    if (this.props.parentState){
      defValue = this.props.parentState
    } else {
      defValue = ''
    }
    return (
      <div className="sub-section">
        <div className="info">
          <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column">
                <div className="control name">
                  <label className='label'>Institution Name:</label>
                  <h3 className="title">{this.props.component.institution_name}</h3>
                </div>
              </div>
              <div className="column">
                <div className="control phone">
                  <label className='label'>Area of Study</label>
                  <h3 className="title">{this.props.component.major}</h3>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="control location">
                  <label className='label'>Start Date</label>
                  <h3 className="title">{this.props.component.begin_attendance}</h3>
                </div>
              </div>
              <div className="column">
                <div className="control location">
                  <label className='label'>Graduation</label>
                  <h3 className="title">{this.props.component.graduation}</h3>
                </div>
              </div>
              <div className="column">
                <div className="control website">
                  <label className='label'>GPA</label>
                  <h3 className="title">{this.props.component.gpa}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteButton component={this.props.component} deleteSection={this.props.deleteSection} name={'Delete Education'} />
     </div>
    )
  }
}

// export default EducationSave
