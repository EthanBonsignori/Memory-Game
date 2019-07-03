import React, { Component } from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
import Game from './components/Game'
import Score from './components/Score'
import FancyText from './components/FancyText'
import './assets/css/App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      score: 0,
      maxScore: 0,
      scoreColor: 'white',
      maxScoreColor: 'white'
    }
    this.handleScore = this.handleScore.bind(this)
  }

  handleScore (scored) {
    let maxScore = this.state.maxScore
    let score = this.state.score
    let scoreClass = this.state.scoreColor
    let maxScoreClass = this.state.maxScoreColor

    if (scored) {
      scoreClass = 'correct-guess'
      score++
    } else {
      score = 0
      scoreClass = 'incorrect-guess'
    }
    if (maxScore < score) {
      maxScoreClass = 'correct-guess'
      maxScore = score
    }
    this.setState({ maxScore, score, scoreClass, maxScoreClass })

    setTimeout(() => {
      scoreClass = ''
      maxScoreClass = ''
      this.setState({ scoreClass, maxScoreClass })
    }, 450)
  }

  render () {
    return (
      <div>
        <Navbar fixed='top' bg='none' className='justify-content-between'>
          <Container>
            <Navbar.Brand className='nav-brand'>Memory Game</Navbar.Brand>
            <Score
              score={this.state.score}
              maxScore={this.state.maxScore}
              scoreClass={this.state.scoreClass}
              maxScoreClass={this.state.maxScoreClass}
            />
          </Container>
        </Navbar>
        <Parallax
          bgImage={require('./assets/images/lotr_bg.jpg')}
          bgImageAlt='Lord of the Rings Background'
          strength={400}
        >
          <Container>
            <Row className='h-50'>
              <Col className='h-100 d-table'>
                <FancyText />
              </Col>
            </Row>
          </Container>
        </Parallax>
        <Container>
          <Game handleScore={this.handleScore} />
        </Container>
      </div>
    )
  }
}

export default App
