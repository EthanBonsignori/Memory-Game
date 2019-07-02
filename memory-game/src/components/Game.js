import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Portrait from '../components/Portrait'
import { shuffle } from '../utils/utils'
import portraitsJson from '../assets/data/portraits.json'

const initialPortraits = shuffle(portraitsJson)
let clicked = []

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      score: 0,
      maxScore: 0,
      portraits: initialPortraits
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (id) {
    const handleScore = this.props.handleScore
    let portraits = this.state.portraits
    for (let i = 0; i < portraits.length; i++) {
      if (portraits[i].id === id) {
        if (!clicked.includes(id)) {
          clicked.push(id)
          handleScore(true)
        } else {
          // Handle loss
          clicked = []
          handleScore(false)
        }
      }
    }
    // Randomize order of portraits
    portraits = shuffle(portraits)
    this.setState({ portraits: portraits })
  }

  render () {
    return (
      <div>
        <Row className='justify-content-center'>
          {this.state.portraits.map(portrait => (
            <Col
              lg='2' md='3' sm='4'
              className='gameCol'
              key={portrait.id}
              onClick={() => this.handleClick(portrait.id)}
            >
              <Portrait name={portrait.name} />
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default Game
