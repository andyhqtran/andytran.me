import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import { background, color, compose, flexbox, layout, position, space } from 'styled-system'

export const StyledCard = styled('div')(
  css({
    backgroundColor: 'contrast',
    borderRadius: 8
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
