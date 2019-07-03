import React, { Component } from 'react'
import '../assets/css/App.css'

class Score extends Component {
  render () {
    return (
      <div className='score'>
        score:{` `}
        <span className={this.props.scoreClass}>
          {this.props.score}
        </span>
        {` `}| max score:{` `}
        <span className={this.props.maxScoreClass}>
          {this.props.maxScore}
        </span>
      </div>
    )
  }
}

export default Score
