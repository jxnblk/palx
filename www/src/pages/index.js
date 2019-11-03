import React from 'react'
import { Helmet } from 'react-helmet'
import palx from '../../../palx/src'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import {
  Box,
  Grid,
  Flex,
  Label,
  Input,
  Heading,
  Button,
  Text,
  Link,
} from '@theme-ui/components'

const theme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    gray: '#aaa',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        gray: '#555',
      },
    },
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
  },
  text: {
    heading: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    }
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'text',
    }
  },
  forms: {
    input: {
      borderColor: 'gray',
    }
  }
}

export default props => {
  const [color, setColor] = React.useState('#07c')
  const [colors, setColors] = React.useState(() => palx('#07c'))

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          fontFamily: 'system-ui, sans-serif',
          lineHeight: 1.5,
          maxWidth: 1280,
          mx: 'auto',
          p: 3,
          color: '#000',
          bg: '#fff',
        }}>
        <Global
          styles={{
            body: {
              margin: 0,
            }
          }}
        />
        <Box py={4}>
          <Heading as='h1'
            sx={{
              fontSize: 3,
            }}>
            Palx: Automatic UI Color Palette Generator
          </Heading>
          <p>
            Provide a single color value and Palx returns a full-spectrum color palette, well suited for UI design and data visualizations that work harmoniously with brand colors.
          </p>
        </Box>
        <Box
          as='form'
          py={4}
          onSubmit={e => {
            e.preventDefault()
            try {
              const colors = palx(color)
              setColors(colors)
            } catch (e) {}
          }}>
          <Label htmlFor='base-color'>
            Base Color
          </Label>
          <Flex>
            <Box
              px={5}
              py={3}
              mr={3}
              sx={{
                bg: color,
              }}
            />
            <Input
              id='base-color'
              name='base-color'
              value={color}
              onChange={e => {
                setColor(e.target.value)
              }}
              mr={3}
            />
            <Button
              sx={{
                flex: 'none',
              }}>
              Update
            </Button>
          </Flex>
        </Box>
        <Box>
          {Object.keys(colors).map((name, i) => {
            const value = colors[name]
            if (!Array.isArray(value)) return false
            return (
              <Box key={name} py={3}>
                <Heading
                  id={name}
                  sx={{
                    fontSize: 2,
                  }}>
                  {name}
                </Heading>
                <Grid width={[128, 192]}>
                  {value.map((val, i) => (
                    <Box key={val}>
                      <Box
                        sx={{
                          p: 4,
                          bg: val,
                        }}
                      />
                      <Flex
                        sx={{
                          fontSize: 0,
                        }}>
                        <Text
                          sx={{
                            fontWeight: 'bold',
                          }}>
                          {name} {i}
                        </Text>
                        <Box mx='auto' />
                        <Text>
                          {val}
                        </Text>
                      </Flex>
                    </Box>
                  ))}
                </Grid>
              </Box>
            )
          })}
        </Box>
        <Box py={4}>
          <Heading
            sx={{
              fontSize: 2,
              mb: 3,
            }}>
            Download
          </Heading>
          <Button
            as={GatsbyLink}
            mr={2}
            to='/json'
            state={{ colors }}>
            JSON
          </Button>
          <Button
            as={GatsbyLink}
            to='/css'
            state={{ colors }}>
            CSS
          </Button>
        </Box>
        <Box as='footer' py={4}>
          <Link href='https://github.com/jxnblk/palx' mr={2}>
            GitHub
          </Link>
          <Link href='https://jxnblk.com'>
            Made by Jxnblk
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
