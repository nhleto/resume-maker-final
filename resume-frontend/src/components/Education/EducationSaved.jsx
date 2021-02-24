import React, { Component } from 'react'
import EditButton from "../Buttons/EditButton";
import { DeleteButton } from '../Buttons/DeleteButton'
import shortid from "shortid";
import { EducationForm } from "./EducationForm";
import { EditEducation } from "./EditEducation";

export class EducationSaved extends Component {
  constructor(props){
    super(props)
    this.state = {
      saved: true,
      institution_name: '',
      major: '',
      begin_attendance: '',
      graduation: '',
      gpa: ''
    }
    this.editData = this.editData.bind(this)
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

  editData(){
    this.setState({ saved: false })
  }

  render() {

    return (
      <div className="sub-section">
        {this.state.saved === false ? <EducationForm parentState={this.props.component} /> : 
        <EditEducation component={this.props.component} editData={this.editData} />}
        {/* <div className="info">
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
      </div> */}
      <DeleteButton
      component={this.props.component}
      deleteSection={this.props.deleteSection}
      name={'Delete Education'} />
      <EditButton
      name={'Edit Education'}
      editData={this.editData}
      component={this.props.component} />
     </div> 
    )
  }
}

// export default EducationSave
