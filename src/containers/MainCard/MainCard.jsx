import React, { Component } from 'react';
import {
  Box,
  Flex,
  Text,
  Link,
  SkeletonText,
  TagLabel,
  Tag,
} from '@chakra-ui/react';
import { CopyIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

class MainCardComponent extends Component {
  state = {
    name: 'card',
    idea: '',
    author: '',
    intro: '',
    curator: '',
    curator_link: '',
    collection: '',
  };
  constructor(props) {
    super(props);
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('https://q24.io/api/v1/ideas:random_one');
    const data = await response.json();
    this.setState({
      idea: data.idea,
      url: data.url,
      author: data.author,
      intro: data.intro,
      curator: data.curator,
      curator_link: data.curator_link,
      collection: data.collection,
    });
  };

  render() {
    return (
      <Flex
        flexDirection="column"
        w="620px"
        h="420px"
        padding="30px"
        borderRadius="19px"
        bg="#e6e7ee"
        boxShadow="15px 15px 30px #c4c4ca, -15px -15px 30px #ffffff"
      >
        <Flex flexDirection="row" h="10%">
          <Flex flexDirection="row" w="50%" justifyContent="flex-start">
            <ChevronLeftIcon marginRight="10px" />
            <ChevronRightIcon />
          </Flex>
          <Flex flexDirection="row" w="50%" justifyContent="flex-end">
            <CopyIcon />
          </Flex>
        </Flex>
        <Box w="100%" h="70%" textAlign="left">
          <SkeletonText
            isLoaded={this.state.idea}
            noOfLines={3}
            spacing="4"
            skeletonHeight="1em"
          >
            <Text fontSize="lg" noOfLines={5}>
              <Link href={this.state.url}>{this.state.idea}</Link>
            </Text>
          </SkeletonText>
        </Box>
        <Box w="100%" h="7%" textAlign="right">
          <Text fontSize="md">{this.state.author}</Text>
        </Box>

        <Flex>
          <Box
            w="50%"
            marginTop="10px"
            textAlign="left"
            alignItems="center"
            display={this.state.collection ? 'block' : 'none'}
          >
            <Tag size={'sm'}>
              <TagLabel>{this.state.collection}</TagLabel>
            </Tag>
          </Box>
          <Box w="50%" marginTop="10px" textAlign="right" alignItems="center">
            <Box
              fontSize="xs"
              color="grey"
              display={this.state.curator ? 'block' : 'none'}
            >
              {'本内容由 '}
              <Link href={this.state.curator_link}>{this.state.curator}</Link>
              {' 提供'}
            </Box>
          </Box>
        </Flex>
      </Flex>
    );
  }
}

export default MainCardComponent;
