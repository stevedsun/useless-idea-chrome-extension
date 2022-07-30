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
  Popover,
  Image,
  useToast
} from '@chakra-ui/react'
import { CopyIcon, ExternalLinkIcon } from '@chakra-ui/icons'

const MainCard = () => {
  const [state, setState] = useState(() => ({}))
  const [loaded, setLoaded] = useState(false)
  const colorPopup = useColorModeValue('color1', '_color1')
  const colorCard = useColorModeValue('color3', '_color3')
  const colorTag = useColorModeValue('color4', '_color4')
  const toast = useToast()

  const fetchData = async () => {
    const collections = JSON.parse(localStorage.getItem('collections'))
    let response
    if (!collections) {
      response = await fetch('https://q24.io/api/v1/ideas:random_one')
    } else {
      const blockList = collections
        .filter(item => !item.feed)
        .map(item => item.name)
      response = await fetch('https://q24.io/api/v1/ideas:block', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blockList)
      })
    }

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
    setLoaded(true)
  }

  const onCopy = () => {
    navigator.clipboard.writeText(`${state.idea} -- ${state.author}`)
    if (!toast.isActive('copy')) {
      return toast({
        id: 'copy',
        status: 'success',
        duration: 5000,
        position: 'top',
        render: () => (
          <Box padding="10px" color={colorTag}>
            内容已复制到剪贴板
          </Box>
        )
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const IdeaContent = props => {
    if (state.idea) {
      return (
        <Popover placement="top">
          <PopoverTrigger>
            <Text fontSize="xl" noOfLines={7} cursor="pointer">
              {state.idea}
            </Text>
          </PopoverTrigger>
          <PopoverContent w="auto" bg={colorPopup}>
            <PopoverArrow bg={colorPopup} />
            <PopoverBody>
              <Link href={state.url}>
                <IconButton
                  aria-label="link"
                  icon={<ExternalLinkIcon />}
                  variant="unstyled"
                ></IconButton>
              </Link>
              <IconButton
                aria-label="Copy to clipboard"
                icon={<CopyIcon />}
                onClick={onCopy}
                variant="unstyled"
              ></IconButton>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )
    } else {
      return (
        <Box>
          <Text textAlign={'center'}>哎？内容咕咕了</Text>
          <Image
            src="cyber-pigeon.png"
            alt="我是谁，我在哪"
            w="250px"
            h="250px"
            margin={'auto'}
            filter="drop-shadow(0px 0px 2px rgba(0,0,0,0.5))"
          ></Image>
        </Box>
      )
    }
  }

  return (
    <Flex
      flexDirection="column"
      w="620px"
      h="420px"
      padding="30px"
      borderRadius="15px"
      boxShadow={'xl'}
      color={colorCard}
    >
      <Box h="10%" position="relative"></Box>

      <Box w="100%" h="70%" textAlign="left">
        <SkeletonText
          startColor={colorPopup}
          endColor={colorCard}
          isLoaded={loaded}
          noOfLines={3}
          spacing="4"
          skeletonHeight="1.25rem"
        >
          <IdeaContent></IdeaContent>
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
          <Tag size={'sm'} color={colorTag}>
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
