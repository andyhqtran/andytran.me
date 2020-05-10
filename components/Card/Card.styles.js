import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { background, color, compose, flexbox, layout, position, space } from 'styled-system'

export const StyledCard = styled('div', { shouldForwardProp })(
  css({
    backgroundColor: 'contrast',
    borderRadius: 5
  }),
  compose(
    background,
    color,
    flexbox,
    layout,
    position,
    space
  )
)
