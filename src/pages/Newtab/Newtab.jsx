import * as React from 'react';
import {
  Box,
  Flex,
  HStack,
  useColorMode,
  Switch,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import MainCardComponent from '../../containers/MainCard/MainCard';
import { SettingsIcon } from '@chakra-ui/icons';
import SettingsComponent from '../../containers/Settings/Settings';

const Newtab = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex flexDirection="column" h="100vh" bg="#e6e7ee">
      <Flex flexDirection="row" justifyContent="flex-end" h="80px">
        <IconButton
          w="50px"
          margin="auto 50px"
          aria-label="Settings"
          icon={<SettingsIcon />}
          onClick={onOpen}
        />
        <SettingsComponent
          isOpen={isOpen}
          onClose={onClose}
        ></SettingsComponent>
      </Flex>
      <HStack w="100vw" flex="1" justifyContent="center">
        <Box>
          <MainCardComponent></MainCardComponent>
        </Box>
      </HStack>
    </Flex>
  );
};

export default Newtab;
