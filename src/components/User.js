
import React from 'react';
import { Header } from 'semantic-ui-react';

  const User = ({name}) => {
    return <>
    <Header as="h3">{name}</Header>
    <p>User component</p>
    </>
  };
  export default User;