import React from 'react';

export class AddButton extends React.Component{
  constructor(props){
    super(props)

    this.sendData = this.sendData.bind(this)
  }

  sendData(){
    const { value, index, state_key } = this.props
    this.props.addSection(value, index, state_key)
  }

  render(){
    return(
        <button className="skills"
        style={{marginTop:'20px', marginRight:'20px', color:'black'}}
        onClick={this.sendData}
        id='edButton'>{this.props.name}</button>
    )
  }
}