import * as React from 'react'
import { ChakraProvider, Box, HStack, Flex } from '@chakra-ui/react'

import MainCardComponent from '../../containers/MainCard/MainCard';
import InfoComponent from '../../containers/Info/Info';


const Newtab = () => {
  return (
    <ChakraProvider>
      <Flex flexDirection='column' h='100vh' bg='#e6e7ee'>
        <HStack w='100vw' flex='1'>
          <Box w="25vw">1</Box>
          <Box w='25vw'>
            <MainCardComponent></MainCardComponent>
          </Box>
          <Box w='25vw'>3</Box>
          <Box w='25vw'>4</Box>
        </HStack>
        <Box w="100vw" h='50px' textAlign='center'>
          <InfoComponent></InfoComponent>
        </Box>

      </Flex>
      {/* <MainCardComponent></MainCardComponent> */}
      {/* <footer>
        <p>制作：<a href="https://twitter.com/way2steve" target="_blank" rel="noreferrer">Steve</a> & <a
          href="https://twitter.com/fm100" target="_blank" rel="noreferrer">Bob</a></p>
        <p>支持：<a href="https://club.q24.io/">灵感买家俱乐部会员</a></p>
      </footer> */}
    </ChakraProvider>
  );
};

export default Newtab;
