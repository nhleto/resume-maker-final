import React from "react";
import { AddButton } from "../Buttons/AddButton";
import { DeleteButton } from "../Buttons/DeleteButton";
import shortid from 'shortid';
import { EducationSave } from "./EducationSaved";
import { EducationForm } from "./EducationForm";
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
    this.deleteSection =this.deleteSection.bind(this)
  }

  handleChange(evt) {
    const value = evt.target.value;
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

  deleteSection(){
    // this.props.onSubmi
  }

  render() {
    let button;
    let section;
    // if (this.state.saved === true){
    //   button = <DeleteButton
    //   name={'Delete Education'}
    //   deleteSection={this.deleteSection} />
    // } else {
    //   button = <SaveButton
    //   saveData={this.formSubmit} />
    // }
    section = <EducationForm onInputChange={this.handleChange} />
    button = <SaveButton
    saveData={this.formSubmit} />
    // button = <AddButton
    //   name={'Add Education +'}
    //   value={'education_counter'}
    //   index={this.props.index}
    //   state_key={'education_'}
    //   addSection={this.props.addSection} />
    return (
      <div className="section">
        <div className="sub-section">
          <h2 className="title">Education</h2>
          <div className="info">
          {section}
          </div>
          {button}
        </div>
        {this.props.parentState.education.map(component => 
          <EducationSave
          key={component.id}
          parentState={component}
          onInputChange={this.handleChange}
          />
        )}
      </div>
    )
  }
}