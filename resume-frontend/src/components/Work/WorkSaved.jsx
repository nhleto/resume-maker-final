import React, { Component } from 'react'
import { WorkForm } from "./WorkForm";
import { WorkEdit } from "./WorkEdit";

export class WorkSaved extends Component {
  constructor(props) {
    super(props)
    const {company_name, end_employment, responsibilities, start_of_employment, title} = this.props.parentComponent
    this.state = {
      saved:true,
      company_name: company_name,
      end_employment: end_employment,
      responsibilities: responsibilities,
      start_of_employment: start_of_employment,
      title: title
      }

    this.editData = this.editData.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  editData(){
    this.state.saved === true ? this.setState({ saved: false }) : this.setState({ saved: true })
  }
  
  render() {
    return (
      <div className="sub-section">
        {this.state.saved === true ?
          <WorkEdit
          parentState={this.props.parentComponent}
          state={this.state}
          deleteSection={this.props.deleteSection} 
          editSection={this.editData} /> :
          
          <WorkForm
          saveSection={this.editData}
          parentState={this.props.parentComponent}
          state={this.state}
          deleteSection={this.props.deleteSection} 
          onChange={this.handleChange}
          editSection={this.props.editSection} />
        }
      </div>
    )
  }
}

