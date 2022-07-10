import React, { Component } from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import {
  CopyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  InfoIcon,
  LinkIcon,
} from '@chakra-ui/icons';

class MainCardComponent extends Component {
  state = {
    name: 'card',
    idea: '',
    author: '',
    intro: '',
    curator: ' ',
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
            {/* <DownloadIcon marginRight="10px" /> */}
            <CopyIcon />
          </Flex>
        </Flex>
        <Box w="100%" h="70%" textAlign="left">
          <Text fontSize="lg" noOfLines={5}>
            {this.state.idea}
            <Link marginLeft="10px" href={this.state.url}>
              <LinkIcon />
            </Link>
          </Text>
        </Box>
        <Box w="100%" h="7%" textAlign="right">
          <Text fontSize="md">{this.state.author}</Text>
        </Box>

        <Box w="100%" marginTop="10px" textAlign="right" alignItems="center">
          <Text fontSize="xs" color="grey">
            本内容由 <Text as="u">{this.state.curator}</Text> 提供
          </Text>
        </Box>
      </Flex>
    );
  }
}

export default MainCardComponent;
