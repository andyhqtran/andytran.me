import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { rem, transitions } from 'polished'
import { background, color, compose, flexbox, layout, position, space, typography } from 'styled-system'

export const StyledButton = styled('button')(
  {
    outline: 'none',
    backgroundColor: 'transparent',
    height: 56,
    border: 0,
    borderRadius: 28,
    letterSpacing: rem(-0.2),
    cursor: 'pointer'
  },
  transitions('background-color', '0.2s ease'),
  css({
    paddingLeft: 8,
    paddingRight: 8,
    color: 'buttonText',
    fontSize: 'body',
    '&:focus, &:hover': {
      backgroundColor: 'contrast'
    }
  }),
  (props) => ({
    boxShadow: `inset 0 0 0 1px ${themeGet('colors.border')(props)}`
  }),
  compose(
    background,
    color,
    flexbox,
    layout,
    position,
    space,
    typography
  )
)
