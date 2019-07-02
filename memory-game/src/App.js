import React, { Component } from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap'
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

  handleScore (scored) {
    let maxScore = this.state.maxScore
    let score = this.state.score

    if (scored) score++
    else score = 0

    if (maxScore < score) maxScore = score

    this.setState({ maxScore, score })
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
          <Container>
            <Row className='h-50'>
              <Col className='h-100 d-table'>
                <div className='d-table-cell align-middle text-center' style={{ height: '70vh' }} >
                  <span className='fancy-text'>select each item only once</span>
                  <br />
                  <span className='fancy-subtext'>select each item only once</span>
                </div>
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
