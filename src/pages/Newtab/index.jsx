import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Newtab from './Newtab';
import './index.css';
import theme from './theme';

render(
  <ChakraProvider theme={theme}>
    <Newtab />
  </ChakraProvider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
