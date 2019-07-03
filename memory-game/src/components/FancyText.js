import React, { Component } from 'react'

class FancyText extends Component {
  render () {
    return (
      <div className='d-table-cell align-middle text-center' style={{ height: '70vh' }} >
        <span className='fancy-text'>select each item only once</span>
        <br />
        <span className='fancy-subtext'>select each item only once</span>
      </div>
    )
  }
}

export default FancyText
