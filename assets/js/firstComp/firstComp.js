import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Caleb',
      health: 100,
      level: 2,
      lowLevelClass: 'danger-red'
    }
    this.clickedButton = this.clickedButton.bind(this);
  }

  clickedButton () {
    this.setState({
      health: this.state.health - 25
    }, function() {
      console.log(this.state.health);
    });
  }

  render () {
    return (
      <div id="parent">
        <Header />
        <div className={(this.state.health < 55) ? this.state.lowLevelClass : 'blue-bg'}>
          <div className="user-info">
            <h3>Name: {this.state.name}</h3>
            <h3>Level: {this.state.level}</h3>
          </div>
          <LogoImage mickeyMouse={this.clickedButton} health={this.state.health}/>
        </div>
      </div>
    )
  }
}

class LogoImage extends Component {
  constructor () {
    super()
    this.state = {
      gameOver: 'Sorry You Lost...'
    }
  }

  render () {
    return (
      <div className="logoImageComp">
        <img src="/img/logo.png" alt="girl with bape" onClick={this.props.mickeyMouse} />
        <h3>Health: {(this.props.health <= 0) ? this.state.gameOver : this.props.health}</h3>
      </div>
    )
  }
}

var Header = function () {
  return (
    <header>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  )
};


const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
