import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import { rem } from 'polished'
import { background, color, compose, flexbox, layout, position, space, typography } from 'styled-system'

export const StyledButton = styled('button')(
  {
    outline: 'none',
    backgroundColor: 'transparent',
    height: 56,
    borderRadius: 28,
    letterSpacing: rem(-0.2),
    cursor: 'pointer'
  },
  css({
    paddingLeft: 4,
    paddingRight: 4,
    color: 'white',
    fontSize: 'body'
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
