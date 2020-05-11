import styled from '@emotion/styled'
import { color, compose, flexbox, grid, layout, space } from 'styled-system'

export const StyledNavigation = styled('nav')(
  {
    display: 'flex',
    alignItems: 'center'
  },
  compose(
    color,
    flexbox,
    grid,
    layout,
    space
  )
)
