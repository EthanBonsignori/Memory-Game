import React, { Component } from 'react'

class Portrait extends Component {
  state = {
    isClicked: false
  };

  // componentDidMount() {
  //   const fullImgPath = this.state.imgPath + this.props.imgSrc
  //   this.setState({imgPath: fullImgPath, id: this.props.id })
  // }

  handleClick() {
    if (this.state.isClicked) {
      console.log('WRONG')
    } else {
      this.setState({isClicked: true})
      console.log('RIGHT')
    }
  }

  render () {
    const { id, name } = this.props
    return (
      <div className='portrait' id={this.props.id} onClick={() => handleClick}>
        <img src={require(`../assets/images/${this.props.name}.png`)} alt='Character Card' />
      </div>
    )
  }
}

export default Portrait
