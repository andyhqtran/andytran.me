import styled from '@emotion/styled'
import { background, border, color, compose, flexbox, grid, layout, position, shadow, space, typography } from 'styled-system'

export const StyledBlock = styled('div')(
  compose(
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography
  )
)
