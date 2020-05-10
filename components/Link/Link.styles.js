import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import { transitions } from 'polished'
import { color, compose, layout, position, space, typography } from 'styled-system'

export const StyledLink = styled('a')(
  {
    textDecorationLine: 'underline'
  },
  transitions(['color', 'text-decoration-color'], '0.2s ease'),
  css({
    color: 'shade.7',
    fontSize: 2,
    letterSpacing: 1,
    lineHeight: 3,
    '&:focus, &:hover': {
      color: 'primary'
    }
  }),
  compose(
    color,
    layout,
    position,
    space,
    typography
  )
)
