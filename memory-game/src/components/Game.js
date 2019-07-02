import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Portrait from '../components/Portrait'

const initialPortraits = [
  { id: 1, isClicked: false, name: 'Aragorn' },
  { id: 2, isClicked: false, name: 'Bilbo' },
  { id: 3, isClicked: false, name: 'Bombur' },
  { id: 4, isClicked: false, name: 'Boromir' },
  { id: 5, isClicked: false, name: 'Frodo' },
  { id: 6, isClicked: false, name: 'Gandalf' },
  { id: 7, isClicked: false, name: 'Gimli' },
  { id: 8, isClicked: false, name: 'Legolas' },
  { id: 9, isClicked: false, name: 'Merry' },
  { id: 10, isClicked: false, name: 'Pippin' },
  { id: 11, isClicked: false, name: 'Samwise' },
  { id: 12, isClicked: false, name: 'Thorin' }
].sort(() => Math.random() - 0.5)

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
    // let newPortraits = initialPortraits.map(portrait => {
    let newPortraits = this.state.portraits
    for (let i = 0; i < newPortraits.length; i++) {
      if (newPortraits[i].id === id) {
        // Set portrait to clicked
        if (!newPortraits[i].isClicked) {
          newPortraits[i].isClicked = true
          // Handle loss
        } else {
          console.log('you lost')
        }
      }
    }

    // Randomize portraits
    newPortraits = newPortraits.sort(() => Math.random() - 0.5)

    console.log(newPortraits)

    this.setState({ portraits: newPortraits })
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
