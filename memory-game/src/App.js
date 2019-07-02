import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
import Game from './components/Game'
import './assets/css/App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      score: 0,
      maxScore: 0
    }
    this.handleScore = this.handleScore.bind(this)
  }

  handleScore (isLoss) {
    if (this.state.score === 12) {
      this.setState({ maxScore: this.state.score, score: 0 })
      return
    }
    if (!isLoss) {
      this.setState({ score: this.state.score + 1 })
    } else if (isLoss && this.state.maxScore < this.state.score) {
      this.setState({ maxScore: this.state.score, score: 0 })
    } else if (isLoss) {
      this.setState({ score: 0 })
    }
  }

  render () {
    return (
      <div>
        <Navbar fixed='top' bg='none' className='justify-content-between'>
          <Container>
            <Navbar.Brand href='/' style={{ color: 'white', fontFamily: 'firstorder', fontSize: '4rem' }}>Memory Game</Navbar.Brand>
            <span className='score'>score: {this.state.score} | max score: {this.state.maxScore}</span>
          </Container>
        </Navbar>
        <Parallax
          bgImage={require('./assets/images/lotr_bg.jpg')}
          bgImageAlt='Lord of the Rings Background'
          strength={400}
        >
          <div style={{ height: '70vh' }} />
        </Parallax>
        <Container>
          <Game handleScore={this.handleScore} />
        </Container>
      </div>
    )
  }
}

export default App