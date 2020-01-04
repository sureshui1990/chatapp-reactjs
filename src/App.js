// import packages
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

// Making the App component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color:'#fff'
    }
  }
  
  setColor = (color) => {
    this.setState({ color });
  }

  render() {
    
    return (
      <div>
        <Button circular size="massive" color="orange" content="dd" inverted secondary  />
        <Button active as="h5" >active me</Button>

      </div>
    )
  }
}

export default App;