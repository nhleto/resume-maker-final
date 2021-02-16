import React from "react";

export class Header extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      header: ({
        name: '',
        phone: '',
        location: '',
        website: '',
        email: ''
      })
    }
    this.getValue = this.getValue.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  getValue(){
    let inputs = document.querySelectorAll('input')
    let values = []
    inputs.forEach(element => {
      values.push(element.value)
    });
    this.setState({
      header: values
    })
  }

  handleChange(evt){
    const value = evt.target.value
    this.setState({
      header: {...this.state.header, [evt.target.name]: value}  
    });
    this.props.onInputChange(this.state)
  }

  render(){

    return(
      <div className="section">
        <div className="sub-section">
        <h2 className="title">Contact Information</h2>
          <div className="info">
              <div className="top-row">
                <div className="control name">
                  <label className='label'>Name</label>
                  <input type="text"
                  name='name'
                  onChange={this.handleChange}
                  id='name_input'
                  className='input'
                  autoComplete='off'
                  placeholder='First and Last Name'/>
                  <span className='mui-Bottom'></span>
                </div>
                <div className="control phone">
                  <label className='label'>Phone</label>
                  <input type="tel"
                  onChange={this.handleChange}
                  name='phone'
                  id='phone_input'
                  className='input'
                  autoComplete='off'
                  placeholder='Phone Number'/>
                <span className='mui-Bottom'></span>
                </div>
              </div>
              <div className="second-row">
                <div className="control location">
                  <label className='label'>Location</label>
                  <input type="text"
                  onChange={this.handleChange}
                  name='location'
                  id='location_input'
                  className='input'
                  autoComplete='off'
                  placeholder='Location'/>
                  <span className='mui-Bottom'></span>
                </div>
                <div className="control website">
                  <label className='label'>Website</label>
                  <input type="text"
                  name='website'
                  onChange={this.handleChange}
                  id='website_input'
                  className='input'
                  autoComplete='off'
                  placeholder='Website'/>
                  <span className='mui-Bottom'></span>
                </div>
                <div className="control email">
                  <label className='label'>Email</label>
                  <input type="email"
                  name='email'
                  onChange={this.handleChange}
                  id='email_input'
                  className='input'
                  autoComplete='off'
                  placeholder='Email'/>
                  <span className='mui-Bottom'></span>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}