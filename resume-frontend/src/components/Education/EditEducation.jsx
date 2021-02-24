import React, { Component } from 'react'
import { DeleteButton } from "../Buttons/DeleteButton";
import { EditButton } from "../Buttons/EditButton";

export class EditEducation extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
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
    {/* <DeleteButton
    component={this.props.component}
    deleteSection={this.props.deleteSection}
    name={'Delete Education'} />
    <EditButton
    name={'Edit Education'}
    editData={this.props.editData}
    component={this.props.component} /> */}
   </div>
    )
  }
}

