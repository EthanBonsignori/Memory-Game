import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Portrait from '../components/Portrait'

let portraits = [
  { id: 1, name: 'Aragorn'},
  { id: 2, name: 'Bilbo' },
  { id: 3, name: 'Bombur'},
  { id: 4, name: 'Boromir'},
  { id: 5, name: 'Frodo' },
  { id: 6, name: 'Gandalf'},
  { id: 7, name: 'Gimli' },
  { id: 8, name: 'Legolas'},
  { id: 9, name: 'Merry' },
  { id: 10, name: 'Pippin'},
  { id: 11, name: 'Samwise'},
  { id: 12, name: 'Thorin'}
].sort(() => Math.random() - 0.5)

class Game extends React.Component {
  state = {
    score: 0,
    maxScore: 0,
  }

  render() {
    return(
      <div>
        <Row>
        {portraits.map(portrait => (
          <Col lg='4'>
            <Portrait id={portrait.id} name={portrait.name} />
          </Col>
        ))}
        </Row>
      </div>
    )
  }

}

export default Game
