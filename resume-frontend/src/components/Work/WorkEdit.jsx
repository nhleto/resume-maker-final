import React, { Component } from 'react'
import { DeleteButton } from "../Buttons/DeleteButton";
import { EditButton } from "../Buttons/EditButton";

export class WorkEdit extends Component {
  render() {
    const {company_name, end_employment, responsibilities, start_of_employment, title} = this.props.parentState
    return (
      <div className="sub-section">
      <div className="sub-section">
        <div className="info">
          <div className="columns">
            <div className="column">
              <div className="columns">
                <div className="column">
                  <div className="control name">
                    <label className='label'>Company Name</label>
                    <h3 className="title">{company_name}</h3>
                  </div>
                </div>
                <div className="column">
                  <div className="control phone">
                    <label className='label'>Title</label>
                    <h3 className="title">{title}</h3>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="control">
                    <label className='label'>Responsibilities</label>
                    <h3 className="title">{responsibilities}</h3>
                  </div>
                </div>
                <div className="column">
                  <div className="control"
                    style={{ marginRight: '0' }}>
                    <label className='label'>Start of Employment</label>
                    <h3 className="title">{start_of_employment}</h3>
                  </div>
                </div>
                <div className="column">
                  <div className="control">
                    <label className='label'>End of Employment</label>
                    <h3 className="title">{end_employment}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <DeleteButton
    type={'work_experience'}
    component={this.props.parentState}
    deleteSection={this.props.deleteSection}
    name={'Delete Work Experience'} />
    <EditButton
    name={'Edit Work Experience'}
    editSection={this.props.editSection}
    component={this.props.component} />
    </div>
    )
  }
}

