import React from "react";
import { DeleteButton } from "./Buttons/DeleteButton";
import { AddButton } from "./Buttons/AddButton";


export class WorkExperience extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      work_experience: {}
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    const value = evt.target.value
    this.setState({
      work_experience: { ...this.state.work_experience, [evt.target.name]: value }
    }, () => {
      this.props.onInputChange(this.state);
    })
  }

  render() {
    let button;
    if (this.props.index + 1 === this.props.parentState.work_counter) {
      button = <AddButton name={'Add Work Experience +'}
        value={'work_counter'}
        addSection={this.props.addSection} />
    }
    return (
      <div className="section">
        <div className="sub-section">
          <h2 className="title">Work Experience</h2>
          <div className="info">
            <div className="columns">
              <div className="column">
                <div className="columns">
                  <div className="column">
                    <div className="control name">
                      <label className='label'>Company Name</label>
                      <input type="text"
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                        name='responsibilites'
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
                        onChange={this.handleChange}
                        name='start_of_employment'
                        id='website_input'
                        className='input'
                        autoComplete='off'
                        placeholder='Website' />
                      <span className='mui-Bottom'></span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="control">
                      <label className='label'>End of Employment</label>
                      <input type="date"
                        id='email_input'
                        onChange={this.handleChange}
                        name='end_of_employment'
                        className='input'
                        autoComplete='off'
                        placeholder='Email' />
                      <span className='mui-Bottom'></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {button}
          <DeleteButton
            name={'Delete Work Experience'}
            value={'work_counter'}
            deleteSection={this.props.deleteSection} />
        </div>
      </div>
    )
  }
}