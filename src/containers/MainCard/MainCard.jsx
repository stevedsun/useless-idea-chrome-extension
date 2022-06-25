import React, { Component } from 'react';
import { Box } from '@chakra-ui/react'

class MainCardComponent extends Component {
  state = {
    name: 'dev',
  };

  render() {
    return (
      <Box w='620px' h='420px' borderRadius='19px' bg='#e6e7ee' boxShadow='15px 15px 30px #c4c4ca, -15px -15px 30px #ffffff' textAlign='center'>
        <p>Hello, {this.state.name}!</p>
      </Box>
    );
  }
}

export default MainCardComponent;
