// import packages
import React, { Component } from 'react';
import { Grid, Container, Header } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import About from './components/About';

// Making the App component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <section>
        <Container>
            <Grid>
              
            <Header as="h2" textAlign="center" color="green"></Header>  
            <Header as="h2" textAlign="center" color="green">Ben Tennyson</Header>  

            <Router>
              <Grid.Row columns={2} divided>
            
             <Grid.Column computer="4">
               <ul>
                 <li>
                   <Link to="/">Home</Link>
                 </li>
                 
                 <li>
                   <Link to="/about">About</Link>
                 </li>
                 
                 <li>
                   <Link to="/user">Users</Link>
                 </li>
               </ul>
             </Grid.Column>
             <Grid.Column  computer="12">
                 <Switch>
                   <Route path="/" exact component={() => <Home name="Home" />}  />
                   <Route path="/about" component={() => <About name="About" />} />
                   <Route path="/user" component={() => <User name="User" />}/>  
                 </Switch>
             </Grid.Column>
           </Grid.Row>
           </Router>
          </Grid>

       </Container>
      </section>
    )
  }
}

export default App;