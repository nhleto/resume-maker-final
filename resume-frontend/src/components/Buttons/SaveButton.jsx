import React, { Component } from 'react'

export class SaveButton extends Component {
  render() {
    return (
        <button className='button'
        onClick={this.props.saveData}
        type='submit'
        style={{color:'black', marginTop:'10px'}}>
        Save/Add Education</button>
    )
  }
}

export default SaveButton
