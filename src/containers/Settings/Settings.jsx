import React from 'react';
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
  TagLeftIcon,
  Link,
  useColorMode,
  useColorModeValue,
  Checkbox,
} from '@chakra-ui/react';
import { useEffect } from 'react';

const Settings = (props) => {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();
  const bg = useColorModeValue('color1', '_color1');
  const cardColor = useColorModeValue('color3', '_color3');
  const tagColor = useColorModeValue('color4', '_color4');
  const [useSysTheme, setUseSysTheme] = React.useState(true);

  useEffect(() => {
    let isSystemTheme = JSON.parse(localStorage.getItem('useSysTheme'));
    setUseSysTheme(isSystemTheme);
    if (isSystemTheme) {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setColorMode(prefersDark ? 'dark' : 'light');
    }
  }, [setColorMode]);

  const setThemeSystem = (checked) => {
    localStorage.setItem('useSysTheme', checked);
    setUseSysTheme(checked);
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent minW={'400px'} bg={bg} color={cardColor}>
        <ModalHeader>偏好设置</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            <Flex alignItems={'center'} justifyContent="space-between" h="40px">
              主题
              <RadioGroup
                onChange={toggleColorMode}
                value={colorMode}
                isDisabled={useSysTheme}
              >
                <Stack direction="row">
                  <Radio value="light">亮</Radio>
                  <Radio value="dark">暗</Radio>
                </Stack>
                <Checkbox
                  isChecked={useSysTheme}
                  onChange={(e) => setThemeSystem(e.target.checked)}
                >
                  跟随系统
                </Checkbox>
              </RadioGroup>
            </Flex>
            {/* <Flex
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
                  <Tag size={'sm'} margin="5px 5px" color={tagColor}>
                    <TagLeftIcon boxSize="10px" as={AddIcon}></TagLeftIcon>
                    <TagLabel>{item}</TagLabel>
                  </Tag>
                ))}
              </Flex>
            </Flex> */}
            <Flex alignItems={'center'} justifyContent="space-between" h="40px">
              联系作者
              <Link href="mailto:sund.chn@gmail.com">sund.chn@gmail.com</Link>
            </Flex>
            <Flex alignItems={'center'} justifyContent="space-between" h="40px">
              鸣谢 <Link href="https://club.q24.io/">灵感买家俱乐部</Link>
            </Flex>
          </VStack>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Settings;
