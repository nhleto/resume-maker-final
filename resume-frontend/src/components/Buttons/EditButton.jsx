import React, { Component } from 'react'

export class EditButton extends Component {
  constructor(props){
    super(props)
    this.editData = this.editData.bind(this)
  }
  
  editData(){
    this.props.editData(this.props.component)
  }
  render() {
    return (
      <button className='button'
      onClick={this.props.editData}
      type='submit'
      style={{color:'black', marginTop:'10px', marginRight:'20px'}}>
      {this.props.name}</button>
    )
  }
}

export default EditButton
