import React from "react";
import shortid from 'shortid';
import SaveButton from "../Buttons/SaveButton";


export class WorkExperience extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      saved: false,
      company_name: '',
      title: '',
      responsibiliites: '',
      start_of_employment: '',
      end_employment: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  formSubmit(e){
    e.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      company_name: this.state.company_name,
      title: this.state.title,
      responsibiliites: this.state.responsibiliites,
      start_of_employment: this.state.start_of_employment,
      end_employment: this.state.end_employment
    }, this.setState({
      saved: true,
      // institution_name: '',
      // major: '',
      // begin_attendance: '',
      // graduation: '',
      // gpa: ''
    }))
  }


  render() {

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
                        autoComplete='off'/>
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
                        autoComplete='off' />
                      <span className='mui-Bottom'></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SaveButton saveData={this.formSubmit} />
          {/* {this.props.parentState.work_experience.map(component => 
            <EducationSaved
            key={component.id}
            parentState={this.state}
            deleteSection={this.props.deleteSection}
            component={component}
            onSubmit={this.props.onSubmit}
            editSection={this.props.editSection} />
          )} */}
      </div>
    )
  }
}