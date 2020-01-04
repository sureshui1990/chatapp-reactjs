// import packages
import React, { Component } from 'react'
import socketIOClient from 'socket.io-client';

// Making the App component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endPoint: 'http://192.168.47.83:4001',
      color:'#fff'
    }
  }
  
  send = () => {
    const { endPoint , color } = this.state;
    const socket = socketIOClient(endPoint);  
    socket.emit('change color', color);
  }
  setColor = (color) => {
    this.setState({ color });
  }

  render() {
    const { endPoint } = this.state;
    const socket = socketIOClient(endPoint);
    socket.on('change color', color => {
      console.log('render',color);
      document.body.style.backgroundColor = color;
    } );
    return (
      <div>
      <div style={{ textAlign: "center" }}>
        <button onClick={this.send}>Change Color</button>

        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>

      </div>
      </div>
    )
  }
}

export default App;