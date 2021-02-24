import React from 'react';

export class DeleteButton extends React.Component{
  constructor(props){
    super(props)

    this.sendData = this.sendData.bind(this)
  }

  sendData(){
    this.props.deleteSection(this.props.component, 'education')
  }

  render(){
    return(
      <button className="button"
      style={{marginTop:'20px',marginRight:'20px', color:'black'}}
      onClick={this.sendData}
      id='edButton_delete'
      >{this.props.name}</button>
    )
  }
}
