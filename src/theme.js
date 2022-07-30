import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#FEFBF3', '#2C3333')(props)
    },
    _focus: { boxShadow: 'none !important' }
  })
}

const colors = {
  color1: '#FEFBF3',
  color2: '#F8F0DF',
  color3: '#9D9D9D',
  color4: '#79B4B7',
  _color1: '#2C3333',
  _color2: '#395B64',
  _color3: '#A5C9CA',
  _color4: '#E7F6F2'
}

const config = {
  initialColorMode: 'system',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles, colors })

export default theme
