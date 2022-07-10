import React, { Component } from 'react';
import {
  Box,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  VStack,
  StackDivider,
} from '@chakra-ui/react';

class SettingsComponent extends Component {
  state = {
    name: 'dev',
  };

  render() {
    return (
      <Modal isOpen={this.props.isOpen} onClose={this.props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Box h="40px" bg="yellow.200">
                1
              </Box>
              <Box h="40px" bg="tomato">
                2
              </Box>
              <Box h="40px" bg="pink.100">
                3
              </Box>
            </VStack>
            {/* <Switch
              defaultValue={colorMode === 'dark'}
              w="100px"
              margin="auto 50px"
              onChange={toggleColorMode}
            ></Switch> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
}

export default SettingsComponent;
