import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import { color, compose, space, typography, variant } from 'styled-system'

export const StyledHeading = styled('h1')(
  {
    margin: 0
  },
  css({
    color: 'heading'
  }),
  variant({
    prop: 'variant',
    variants: {
      h1: {
        fontSize: 'h1',
        fontWeight: 'black',
        letterSpacing: 'h1',
        lineHeight: 'h1'
      },
      h2: {
        fontSize: 'h2',
        fontWeight: 'black',
        letterSpacing: 'h2',
        lineHeight: 'h2'
      },
      h3: {
        fontSize: 'h3',
        fontWeight: 'black',
        letterSpacing: 'h3',
        lineHeight: 'h3'
      },
      h4: {
        fontSize: 'h4',
        fontWeight: 'bold',
        letterSpacing: 'h4',
        lineHeight: 'h4'
      },
      h5: {
        fontSize: 'h5',
        fontWeight: 'bold',
        letterSpacing: 'h5',
        lineHeight: 'h5'
      },
      h6: {
        fontSize: 'h6',
        fontWeight: 'bold',
        letterSpacing: 'h6',
        lineHeight: 'h6'
      },
      'h6-alt': {
        fontSize: 'h6',
        fontWeight: 'bold',
        letterSpacing: 'h6alt',
        lineHeight: 'h6',
        textTransform: 'uppercase'
      },
      h7: {
        fontSize: 'h7',
        fontWeight: 'bold',
        letterSpacing: 'h7',
        lineHeight: 'h7'
      },
      'h7-alt': {
        fontSize: 'h7',
        fontWeight: 'bold',
        letterSpacing: 'h7alt',
        lineHeight: 'h7',
        textTransform: 'uppercase'
      }
    }
  }),
  compose(
    color,
    space,
    typography
  )
)
