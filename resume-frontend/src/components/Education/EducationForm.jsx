import React, { Component } from 'react'
import { DeleteButton } from "../Buttons/DeleteButton";
import { EditButton } from "../Buttons/EditButton";


export class EducationForm extends Component {

  render() {
    let buttons = [];

    let defVal = ''
    if (this.props.parentState){
      defVal = this.props.parentState
      buttons.push(
        <DeleteButton
        component={this.props.parentState}
        deleteSection={this.props.deleteSection}
        name={'Delete Education'} />,
        <EditButton
        state={this.props.state}
        type={'education'}
        editSection={this.props.editSection}
        name={"Save Data"}
        component={this.props.parentState} />
      )
    } else {
      buttons = null
    }
    return (
      <div className="sub-section">
        <div className="info">
          <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column">
                <div className="control name">
                  <label className='label'>Institution Name</label>
                  <input type="text"
                    defaultValue={defVal.institution_name}
                    id='institution Name'
                    onChange={this.props.onChange}
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
                    id='major_input'
                    defaultValue={defVal.major}
                    onChange={this.props.onChange}
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
                    defaultValue={defVal.begin_attendance}
                    onChange={this.props.onChange}
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
                    defaultValue={defVal.graduation}
                    onChange={this.props.onChange}
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
                    onChange={this.props.onChange}
                    defaultValue={defVal.gpa}
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
      {buttons}
    </div>
    )
  }
}

