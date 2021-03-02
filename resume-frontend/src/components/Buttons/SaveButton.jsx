import React, { Component } from 'react'

export class SaveButton extends Component {
  render() {

    return (
        <button className='button'
        onClick={this.props.saveData}
        type='submit'
        style={{color:'black', marginTop:'10px', marginRight:'20px'}}>
        {this.props.name}</button>
    )
  }
}

export default SaveButton
