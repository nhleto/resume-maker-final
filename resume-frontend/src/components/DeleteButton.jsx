import React from 'react';

export class DeleteButton extends React.Component{
  constructor(props){
    super(props)

    this.sendData = this.sendData.bind(this)

  }

  sendData(){
    const { value, index, state_key } = this.props
    this.props.deleteSection(value, index, state_key)
  }

  render(){
    return(
      <button className="skills"
      style={{marginTop:'20px'}}
      onClick={this.sendData}
      id='edButton_delete'
      >{this.props.name}</button>
    )
  }
}
