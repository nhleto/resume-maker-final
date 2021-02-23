import React from "react";
import { AddButton } from "../AddButton";
import { DeleteButton } from "../DeleteButton";
import shortid from 'shortid';
import { EducationSave } from "./EducationSave";
import { EducationForm } from "./EducationForm";

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

  render() {
    let button;
      button = <AddButton
        name={'Add Education +'}
        value={'education_counter'}
        index={this.props.index}
        state_key={'education_'}
        addSection={this.props.addSection} />
    return (
      <div className="section">
        <div className="sub-section">
          <h2 className="title">Education</h2>
          <div className="info">
            { this.state.save === true ? 
            <EducationSave /> : 
            <EducationForm /> }
          </div>
          <button className="skills"
          style={{marginRight:'20px', marginTop:'20px'}}
          onClick={this.formSubmit}
          >Save Section</button>
          {/* {button}
          <DeleteButton
            name={'Delete Education'}
            value={'education_counter'}
            state_key={'education_'}
            index={this.props.index}
            target={this}
            deleteSection={this.props.deleteSection} /> */}
        </div>
      </div>
    )
  }
}