import React, { Component } from 'react'
import { DeleteButton } from "../Buttons/DeleteButton";
import { EditButton } from "../Buttons/EditButton";

export class WorkForm extends Component {
  
  render() {
    const {company_name, end_employment, responsibilities, start_of_employment, title} = this.props.parentState
    return (
      <div className="sub-section">
        <div className="info">
          <div className="columns">
            <div className="column">
              <div className="columns">
                <div className="column">
                  <div className="control name">
                    <label className='label'>Company Name</label>
                    <input type="text"
                      defaultValue={company_name}
                      onChange={this.props.onChange}
                      name='company_name'
                      id='company_input'
                      className='input'
                      autoComplete='off'
                      placeholder='Company Name' />
                    <span className='mui-Bottom'></span>
                  </div>
                </div>
                <div className="column">
                  <div className="control phone">
                    <label className='label'>Title</label>
                    <input type="text"
                      defaultValue={title}
                      onChange={this.props.onChange}
                      name='title'
                      id='title_input'
                      className='input'
                      autoComplete='off'
                      placeholder='Job Title' />
                    <span className='mui-Bottom'></span>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="control">
                    <label className='label'>Responsibilities</label>
                    <textarea rows='5'
                      defaultValue={responsibilities}
                      onChange={this.props.onChange}
                      name='responsibilities'
                      id='responsibilities_input'
                      className='input'
                      autoComplete='off'
                      placeholder='List Responsibilities' />
                  </div>
                </div>
                <div className="column">
                  <div className="control"
                    style={{ marginRight: '0' }}>
                    <label className='label'>Start of Employment</label>
                    <input type="date"
                      defaultValue={start_of_employment}
                      onChange={this.props.onChange}
                      name='start_of_employment'
                      id='website_input'
                      className='input'
                      autoComplete='off'/>
                    <span className='mui-Bottom'></span>
                  </div>
                </div>
                <div className="column">
                  <div className="control">
                    <label className='label'>End of Employment</label>
                    <input type="date"
                      defaultValue={end_employment}
                      id='email_input'
                      onChange={this.props.onChange}
                      name='end_of_employment'
                      className='input'
                      autoComplete='off' />
                    <span className='mui-Bottom'></span>
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
        name={'Delete Education'} />

        <EditButton
        saveSection={this.props.saveSection}
        state={this.props.state}
        type={'work_experience'}
        editSection={this.props.editSection}
        name={"Save Data"}
        component={this.props.parentState} />
      </div>
    )
  }
}

