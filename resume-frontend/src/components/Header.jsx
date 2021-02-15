import React from "react";

export class Header extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      header: [],
      api_url: this.props.api_url
    }

    // this.props.sendData = this.sendData.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
    this.getValue = this.getValue.bind(this)
    // this.sendData = this.props.getData.bind(this)
  }

  formSubmit(e){
    e.preventDefault()
    this.getValue()
  }

  getValue(){
    let inputs = document.querySelectorAll('#name_input, #phone_input, #location_input, #website_input, #email_input')
    let values = []
    inputs.forEach(element => {
      values.push(element.value)
    });
    this.setState({
      header: values
    })
    setTimeout(() => {
      this.props.getData(this.state.header)
    }, 25);
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
                  id='name_input'
                  className='input'
                  autoComplete='off'
                  placeholder='First and Last Name'/>
                  <span className='mui-Bottom'></span>
                </div>
                <div className="control phone">
                  <label className='label'>Phone</label>
                  <input type="tel"
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
                  id='location_input'
                  className='input'
                  autoComplete='off'
                  placeholder='Location'/>
                  <span className='mui-Bottom'></span>
                </div>
                <div className="control website">
                  <label className='label'>Website</label>
                  <input type="text"
                  id='website_input'
                  className='input'
                  autoComplete='off'
                  placeholder='Website'/>
                  <span className='mui-Bottom'></span>
                </div>
                <div className="control email">
                  <label className='label'>Email</label>
                  <input type="email"
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