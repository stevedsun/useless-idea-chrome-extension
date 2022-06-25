import React, { Component } from 'react';
import { Box } from '@chakra-ui/react'

class InfoComponent extends Component {
  state = {
    name: 'dev',
  };

  render() {
    return (
      <Box w='620px' h='40px'
        // borderRadius='5px'
        // bg='#e6e7ee'
        // boxShadow='inset 3px 3px 10px #c4c4ca, inset -3px -3px 10px #ffffff'
        display='inline-block'
        textAlign='center'
        // padding='10px'
      >
        <p>Steve&Bob @ 灵感买家俱乐部</p>
      </Box>
    );
  }
}

export default InfoComponent;
