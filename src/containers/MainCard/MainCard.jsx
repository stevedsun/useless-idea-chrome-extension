import React, { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  IconButton,
  Text,
  Link,
  SkeletonText,
  TagLabel,
  Tag,
  useColorModeValue,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Popover
} from '@chakra-ui/react'
import { CopyIcon, ExternalLinkIcon } from '@chakra-ui/icons'

const MainCard = () => {
  const [state, setState] = useState(() => ({}))
  const popColor = useColorModeValue('color1', '_color1')
  const cardColor = useColorModeValue('color3', '_color3')
  const tagColor = useColorModeValue('color4', '_color4')

  const fetchData = async () => {
    const response = await fetch('https://q24.io/api/v1/ideas:random_one')
    const data = await response.json()
    setState({
      idea: data.idea,
      url: data.url,
      author: data.author,
      intro: data.intro,
      curator: data.curator,
      curator_link: data.curator_link,
      collection: data.collection
    })
  }

  const onCopy = () => {
    navigator.clipboard.writeText(`${state.idea} -- ${state.author}`)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Flex
      flexDirection="column"
      w="620px"
      h="420px"
      padding="30px"
      borderRadius="15px"
      boxShadow={'xl'}
      color={cardColor}
    >
      <Box h="10%" position="relative">
        {/* <ChevronLeftIcon /> */}
        {/* <ChevronRightIcon /> */}
        <Link href={state.url}>
          <IconButton
            _focus={'none'}
            // transform="scale(0.8, 0.8)"
            position="absolute"
            top="-10px"
            right="25px"
            aria-label="link"
            icon={<ExternalLinkIcon />}
            variant="unstyled"
          ></IconButton>
        </Link>
        <Popover placement="top">
          <PopoverTrigger>
            <IconButton
              _focus={'none'}
              position="absolute"
              top="-10px"
              right="-10px"
              aria-label="Copy to clipboard"
              icon={<CopyIcon />}
              onClick={onCopy}
              variant="unstyled"
            ></IconButton>
          </PopoverTrigger>
          <PopoverContent w="auto" _focus="none" bg={popColor}>
            <PopoverArrow />
            <PopoverBody>已复制到剪贴板!</PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
      <Box w="100%" h="70%" textAlign="left">
        <SkeletonText
          startColor={popColor}
          endColor={cardColor}
          isLoaded={state.idea}
          noOfLines={3}
          spacing="4"
          skeletonHeight="1.25rem"
        >
          <Text fontSize="xl" noOfLines={7}>
            {state.idea}
          </Text>
        </SkeletonText>
      </Box>
      <Box w="100%" h="7%" textAlign="right">
        <Text fontSize="md">{state.author}</Text>
      </Box>

      <Flex>
        <Box
          w="50%"
          marginTop="10px"
          textAlign="left"
          alignItems="center"
          display={state.collection ? 'block' : 'none'}
        >
          <Tag size={'sm'} color={tagColor}>
            <TagLabel>{state.collection}</TagLabel>
          </Tag>
        </Box>
        <Box w="50%" marginTop="10px" textAlign="right" alignItems="center">
          <Box fontSize="xs" display={state.curator ? 'block' : 'none'}>
            {'本内容由 '}
            <Link href={state.curator_link}>{state.curator}</Link>
            {' 提供'}
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export default MainCard
