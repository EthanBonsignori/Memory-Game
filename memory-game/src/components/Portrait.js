import React, { Component } from 'react'

class Portrait extends Component {
  state = {
    isClicked: false
  }

  render () {
    const { id, name } = this.props
    return (
      <div 
        className='portrait' 
        style={{ backgroundImage: `url(${require(`../assets/images/${name}.png`)})` }}
      />
    )
  }
}

export default Portrait
