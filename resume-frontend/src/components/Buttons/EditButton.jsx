import React, { Component } from 'react'

export class EditButton extends Component {
  constructor(props){
    super(props)
    this.editData = this.editData.bind(this)
  }
  
  editData(){
    const {component, state, type} = this.props
    this.props.editSection(component, state, type)
  }
  render() {
    return (
      <button className='button'
      onClick={this.editData}
      type='submit'
      style={{color:'black', marginTop:'10px', marginRight:'20px'}}>
      {this.props.name}</button>
    )
  }
}

export default EditButton
