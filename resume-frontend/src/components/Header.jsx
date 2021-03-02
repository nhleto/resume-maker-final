import React, { useState, useEffect } from "react";

export const Header = (props) => {

  const [input, setInput] = useState({
    name: '',
    phone: '',
    location: '',
    website: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput( prevState => ({
      ...prevState, [name]: value
    }))
  }

  useEffect(() => {
    props.formSubmit(input)
  },[input])

    return(
      <div className="section">
        <div className="sub-section">
          <h2 className="title">Contact Information</h2>
          <div className="info">
            <div className="columns">
              <div className="column">
                <div className="columns">
                  <div className="column">
                    <div className="control name">
                      <label className='label'>Name</label>
                      <input type="text"
                      name='name'
                      onChange={handleChange}
                      id='name_input'
                      className='input'
                      autoComplete='off'
                      placeholder='First and Last Name'/>
                      <span className='mui-Bottom'></span>
                    </div>      
                  </div>
                  <div className="column">
                    <div className="control phone">
                      <label className='label'>Phone</label>
                      <input type="tel"
                      onChange={handleChange}
                      name='phone'
                      id='phone_input'
                      className='input'
                      autoComplete='off'
                      placeholder='Phone Number'/>
                      <span className='mui-Bottom'></span>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="control location">
                      <label className='label'>Location</label>
                      <input type="text"
                      onChange={handleChange}
                      name='location'
                      id='location_input'
                      className='input'
                      autoComplete='off'
                      placeholder='Location'/>
                      <span className='mui-Bottom'></span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="control website">
                      <label className='label'>Website</label>
                      <input type="text"
                      name='website'
                      onChange={handleChange}
                      id='website_input'
                      className='input'
                      autoComplete='off'
                      placeholder='Website'/>
                      <span className='mui-Bottom'></span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="control email">
                      <label className='label'>Email</label>
                      <input type="email"
                      name='email'
                      onChange={handleChange}
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
          </div>
        </div>
      </div>
    )
}