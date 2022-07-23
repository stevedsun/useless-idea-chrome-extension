import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Newtab from './Newtab';
import './index.css';
import theme from '../../theme';
import { render } from 'react-dom';

render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Newtab />
  </ChakraProvider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
