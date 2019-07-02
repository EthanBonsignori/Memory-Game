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
    this.updateScore = this.updateScore.bind(this)
  }

  // updateScore() {
  //   this.setState({score: this.state.score += 1})
  // }

  render () {
    return (
      <div>
        <Navbar fixed='top' bg='none'>
          <Container>
            <Navbar.Brand href='/' style={{ color: 'white', fontFamily: 'firstorder', fontSize: '4rem' }}>Memory Game</Navbar.Brand>
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
          <Game />
        </Container>
      </div>
    )
  }
}

export default App
