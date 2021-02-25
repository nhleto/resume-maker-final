import React, { Component } from 'react'
import shortid from "shortid";
import { EducationForm } from "./EducationForm";
import { EditEducation } from "./EditEducation";

export class EducationSaved extends Component {
  constructor(props){
    super(props)
    
    const {institution_name, major, begin_attendance, graduation, gpa} = this.props.parentState

    this.state = {
      saved: true,
      institution_name: institution_name,
      major: major,
      begin_attendance: begin_attendance,
      graduation: graduation,
      gpa: gpa
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
    this.state.saved === true ? this.setState({ saved: false }) : this.setState({ saved: true })
  }

  render() {

    return (
      <div className="sub-section">
        {this.state.saved === false ?
        <EducationForm
        parentState={this.props.component}
        state={this.state}
        deleteSection={this.props.deleteSection} 
        onChange={this.handleChange}
        editSection={this.props.editSection} /> : 

        <EditEducation 
        component={this.props.component}
        deleteSection={this.props.deleteSection} 
        editSection={this.editData} />}
     </div> 
    )
  }
}

// export default EducationSave
