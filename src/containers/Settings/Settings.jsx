import React, { Component } from 'react';
import {
  Flex,
  Stack,
  RadioGroup,
  Radio,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  ModalContent,
  VStack,
  StackDivider,
  Tag,
  TagLabel,
  TagCloseButton,
  TagLeftIcon,
  Link,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

class SettingsComponent extends Component {
  state = {
    name: 'dev',
  };

  render() {
    return (
      <Modal isOpen={this.props.isOpen} onClose={this.props.onClose}>
        <ModalOverlay />
        <ModalContent minW={'400px'}>
          <ModalHeader>偏好设置</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Flex
                alignItems={'center'}
                justifyContent="space-between"
                h="40px"
              >
                主题
                <RadioGroup onChange={''} value={''}>
                  <Stack direction="row">
                    <Radio value="system">跟随系统</Radio>
                    <Radio value="light">亮</Radio>
                    <Radio value="dark">暗</Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
              <Flex
                alignItems={'center'}
                justifyContent="space-between"
                minH="40px"
              >
                卡片集
                <Flex maxW={'300px'} flexWrap="wrap">
                  {[
                    'Collection A',
                    'Metrics',
                    'xxxxxxxxxxxlc',
                    'aksdflkajsdf SDKLfjlasd',
                    'aksdflkajsdf SDKLfjlasd',
                    ' SDKLfjlasd',
                    'aksdflkajsdf SDKLfjlasd',
                    ' SDKLfjlasd',
                    'aksdflkajsdf',
                    'SDKLfjlasd',
                  ].map((item) => (
                    <Tag size={'sm'} margin="5px 5px">
                      <TagLeftIcon boxSize="10px" as={AddIcon}></TagLeftIcon>
                      <TagLabel>{item}</TagLabel>
                    </Tag>
                  ))}
                </Flex>
              </Flex>
              <Flex
                alignItems={'center'}
                justifyContent="space-between"
                h="40px"
              >
                联系作者
                <Link href="mailto:sund.chn@gmail.com">sund.chn@gmail.com</Link>
              </Flex>
              <Flex
                alignItems={'center'}
                justifyContent="space-between"
                h="40px"
              >
                鸣谢 <Link href="https://club.q24.io/">灵感买家俱乐部</Link>
              </Flex>
            </VStack>
            {/* <Switch
              defaultValue={colorMode === 'dark'}
              w="100px"
              margin="auto 50px"
              onChange={toggleColorMode}
            ></Switch> */}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
}

export default SettingsComponent;
