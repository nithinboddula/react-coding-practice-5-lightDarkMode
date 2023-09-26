// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {darkMode: true}

  lightMode = () => {
    this.setState(() => ({darkMode: false}))
  }

  darkMode = () => {
    this.setState(() => ({darkMode: true}))
  }

  render() {
    const {darkMode} = this.state

    if (darkMode) {
      return (
        <div className="bg-container">
          <div className="dark-container">
            <h1 className="dark-heading">Click To Change Mode</h1>
            <button
              type="button"
              className="dark-button"
              onClick={this.lightMode}
            >
              Light Mode
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <div className="light-container">
          <h1 className="light-heading">Click To Change Mode</h1>
          <button
            type="button"
            className="light-button"
            onClick={this.darkMode}
          >
            Dark Mode
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
