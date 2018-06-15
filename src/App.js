import React, { Component } from 'react';

// Components
import PocketWatch from './components/PocketWatch/PocketWatch';

// Includes
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      minuteHandPosition: 0,
      secondHandPosition: 0,
      hourHandPosition: 0
    }
  }

  componentDidMount() {
    this.updateClock();
  }

  onClickFlipLid = (event) => {
    const lid = document.querySelector('.clock-frame__lid');
    
    lid.classList.toggle('lid-open');
    
  }

  getCurrentLocalTime = () => {
    const time = new Date();
    const hours = (time.getHours() > 12)?time.getHours() - 12:time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return {
      hours,
      minutes,
      seconds
    }
  }

  timeToDegreePosition = (time) => {
    const secondHandPosition = time.seconds * 6;
    const additionalDegreesMinutes = time.seconds / 10;
    const minuteHandPosition = time.minutes * 6 + additionalDegreesMinutes;
    const additionalDegreesHours = time.minutes / 2;
    const hourHandPosition = time.hours * 30 + additionalDegreesHours; 
    return {
      secondHandPosition,
      minuteHandPosition,
      hourHandPosition
    }
  }

  updateClock = () => {
    const time = this.getCurrentLocalTime();
    const handPostions = this.timeToDegreePosition(time);
    this.setState({
      secondHandPosition: handPostions.secondHandPosition,
      minuteHandPosition: handPostions.minuteHandPosition,
      hourHandPosition: handPostions.hourHandPosition
    });

    setTimeout(() => {
      this.updateClock();
    }, 500);
  }
  render() {
    const {hourHandPosition, minuteHandPosition, secondHandPosition} = this.state;

    return (

      <main className="App">
        <PocketWatch 
          hourHandPosition = {hourHandPosition}
          minuteHandPostion = {minuteHandPosition}
          secondHandPostion = {secondHandPosition}
          onClickFlipLid = {this.onClickFlipLid}
        />
      </main>
    );
  }
}

export default App;
