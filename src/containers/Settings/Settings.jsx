import React from 'react'
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
  Checkbox
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const Settings = props => {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode()
  const colorBg = useColorModeValue('color1', '_color1')
  const colorCard = useColorModeValue('color3', '_color3')
  const colorTag = useColorModeValue('color4', '_color4')
  const [useSysTheme, setUseSysTheme] = React.useState(true)
  const [collections, setCollections] = React.useState([])

  const fetchCollections = async () => {
    const response = await fetch('https://q24.io/api/v1/collections')
    let names = await response.json()
    let collections = JSON.parse(localStorage.getItem('collections'))
    if (collections) {
      let collectionNames = collections.map(item => item.name)
      let newItems = names
        .filter(name => !collectionNames.includes(name))
        .map(item => {
          return {
            name: item,
            feed: true
          }
        })

      let deletedNames = collections.filter(item => !names.includes(item.name))
      collections = [...collections, ...newItems].filter(
        item => !deletedNames.includes(item.name)
      )
    } else {
      collections = names.map(name => {
        if (name === 'Questions') {
          return {
            name: name,
            feed: false
          }
        } else {
          return {
            name: name,
            feed: true
          }
        }
      })
    }

    setCollections(collections)
  }

  useEffect(() => {
    let isSystemTheme = JSON.parse(localStorage.getItem('useSysTheme'))
    setUseSysTheme(isSystemTheme)
    if (isSystemTheme) {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      setColorMode(prefersDark ? 'dark' : 'light')
    }
    fetchCollections()
  }, [setColorMode])

  const setThemeSystem = checked => {
    localStorage.setItem('useSysTheme', checked)
    setUseSysTheme(checked)
  }

  const FeedIcon = props => {
    if (props.item.feed) {
      return <TagLeftIcon boxSize="10px" as={ViewIcon}></TagLeftIcon>
    } else {
      return <TagLeftIcon boxSize="10px" as={ViewOffIcon}></TagLeftIcon>
    }
  }

  const switchFeed = item => {
    setCollections(
      collections.map(i => {
        if (i.name === item.name) {
          i.feed = !i.feed
        }
        return i
      })
    )

    localStorage.setItem('collections', JSON.stringify(collections))
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent minW={'400px'} bg={colorBg} color={colorCard}>
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
              <Stack direction="row">
                <RadioGroup
                  onChange={toggleColorMode}
                  value={colorMode}
                  isDisabled={useSysTheme}
                >
                  <Stack direction="row">
                    <Radio value="light">亮</Radio>
                    <Radio value="dark">暗</Radio>
                  </Stack>
                </RadioGroup>
                <Checkbox
                  isChecked={useSysTheme}
                  onChange={e => setThemeSystem(e.target.checked)}
                >
                  跟随系统
                </Checkbox>
              </Stack>
            </Flex>
            <Flex
              alignItems={'center'}
              justifyContent="space-between"
              minH="40px"
            >
              屏蔽系列
              <Flex maxW={'330px'} flexWrap="wrap" justifyContent={'flex-end'}>
                {collections.map(item => (
                  <Tag
                    size={'sm'}
                    margin="5px 5px"
                    color={item.feed ? colorTag : 'red.200'}
                    key={item.name}
                    onClick={e => switchFeed(item)}
                    cursor={'pointer'}
                  >
                    <FeedIcon item={item}></FeedIcon>
                    <TagLabel textDecor={item.feed ? 'none' : 'line-through'}>
                      {item.name}
                    </TagLabel>
                  </Tag>
                ))}
              </Flex>
            </Flex>
            <Flex alignItems={'center'} justifyContent="space-between" h="40px">
              联系作者
              <Link
                href="https://sund.site/about/"
                fontFamily={'serif'}
                fontStyle="italic"
              >
                Steve Sun
              </Link>
            </Flex>
            <Flex alignItems={'center'} justifyContent="space-between" h="40px">
              鸣谢 <Link href="https://club.q24.io/">灵感买家俱乐部</Link>
            </Flex>
          </VStack>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Settings
