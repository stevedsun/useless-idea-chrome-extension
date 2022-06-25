import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import './Newtab.css';
import './Newtab.scss';


const Newtab = () => {
  return (
    <ChakraProvider>
      <div className="App">
        <header></header>
        <div class="ideas-card">
          <div id="tabcontent" data-tab="1" class="tabcontent">
          </div>
        </div>
        <footer>
          <p>制作：<a href="https://twitter.com/way2steve" target="_blank" rel="noreferrer">Steve</a> & <a
            href="https://twitter.com/fm100" target="_blank" rel="noreferrer">Bob</a></p>
          <p>支持：<a href="https://club.q24.io/">灵感买家俱乐部会员</a></p>
        </footer>
      </div>
    </ChakraProvider>
  );
};

export default Newtab;
