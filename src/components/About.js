import React from 'react';
import { Header } from 'semantic-ui-react';

  const About = ({name}) => {
    return <>
    <Header as="h3">{name}</Header>
    <p>About component</p>
    </>
  };
  
  export default About;