import * as React from 'react'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react'
import MainCard from '../../containers/MainCard/MainCard'
import { SettingsIcon } from '@chakra-ui/icons'
import Settings from '../../containers/Settings/Settings'

const Newtab = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const color_bg = useColorModeValue('color1', '_color1')
  const color_icon = useColorModeValue('color2', '_color2')

  return (
    <Flex
      flexDirection="column"
      h="100vh"
      minW="860px"
      minH="544px"
      bg={color_bg}
    >
      <Flex flexDirection="row" justifyContent="flex-end" h="20px">
        <IconButton
          bg={color_icon}
          borderRadius="50%"
          margin="20px 50px"
          aria-label="Settings"
          icon={<SettingsIcon />}
          onClick={onOpen}
        />
        <Settings isOpen={isOpen} onClose={onClose}></Settings>
      </Flex>
      <HStack w="100vw" flex="1" justifyContent="center">
        <Box>
          <MainCard></MainCard>
        </Box>
      </HStack>
    </Flex>
  )
}

export default Newtab
