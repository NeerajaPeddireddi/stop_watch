// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, elapsedTimeInSeconds: 0}

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false, elapsedTimeInSeconds: 0})
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  tick = () => {
    this.setState(prevState => ({
      elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timerId = setInterval(this.tick, 1000)
    this.setState({isTimerRunning: true})
  }

  renderTimeInSeconds = () => {
    const {elapsedTimeInSeconds} = this.state

    const seconds = Math.floor(elapsedTimeInSeconds % 60)
    if (seconds > 9) {
      return seconds
    }

    return `0${seconds}`
  }

  renderTimeInMinutes = () => {
    const {elapsedTimeInSeconds} = this.state

    const minutes = Math.floor(elapsedTimeInSeconds / 60)

    if (minutes > 9) {
      return minutes
    }
    return `0${minutes}`
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderTimeInMinutes()}:${this.renderTimeInSeconds()}`

    return (
      <div className="background-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stop-watch-card">
          <p className="timer-label">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="stopwatch-image"
              alt="stopwatch"
            />
            Timer
          </p>
          <h1 className="stop-watch">{time}</h1>
          <div className="stop-watch-options">
            <button
              className="start button"
              type="button"
              onClick={this.onStartTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              className="stop button"
              type="button"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              className="reset button"
              type="button"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
