import * as React from 'react';
import { ChakraProvider, Box, HStack, Flex, Select } from '@chakra-ui/react';

import MainCardComponent from '../../containers/MainCard/MainCard';

const Newtab = () => {
  return (
    <ChakraProvider>
      <Flex flexDirection="column" h="100vh" bg="#e6e7ee">
        <Flex flexDirection="row" justifyContent="flex-end" h="80px">
          <Select w="100px" placeholder="Auto" margin="auto 50px">
            <option value="light"> Light </option>
            <option value="dark">Dark</option>
          </Select>
        </Flex>
        <HStack w="100vw" flex="1" justifyContent="center">
          <Box>
            <MainCardComponent></MainCardComponent>
          </Box>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
};

export default Newtab;
