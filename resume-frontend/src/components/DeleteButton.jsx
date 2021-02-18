import React from 'react';

export class DeleteButton extends React.Component{
  constructor(props){
    super(props)

    this.sendData = this.sendData.bind(this)
  }

  sendData(){
    let data = this.props.value
    this.props.deleteSection(data)
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
