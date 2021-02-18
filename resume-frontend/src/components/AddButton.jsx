import React from 'react';

export class AddButton extends React.Component{
  constructor(props){
    super(props)

    this.sendData = this.sendData.bind(this)
  }

  sendData(){
    let data = this.props.value
    this.props.addSection(data)
  }

  render(){
    return(
        <button className="skills"
        style={{marginTop:'20px', marginRight:'20px'}}
        onClick={this.sendData}
        id='edButton'>{this.props.name}</button>
    )
  }
}