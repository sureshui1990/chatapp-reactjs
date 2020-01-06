
import React from 'react';
import { Header } from 'semantic-ui-react';

const Home = ({name}) => {
    return <>
    <Header as="h3">{name}</Header>
    <p>Home component</p>
    </>
  };

  export default Home;