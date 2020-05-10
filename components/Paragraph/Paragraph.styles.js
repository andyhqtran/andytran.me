import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { color, compose, flexbox, layout, position, shadow, space, typography } from 'styled-system'

export const StyledParagraph = styled('p', { shouldForwardProp })(
  css({
    margin: 0,
    color: 'body',
    fontSize: 'body',
    fontWeight: 'regular'
  }),
  compose(
    color,
    flexbox,
    layout,
    position,
    shadow,
    space,
    typography
  )
)
