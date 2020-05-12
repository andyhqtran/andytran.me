import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import { color, compose, flexbox, grid, layout, space } from 'styled-system'

export const StyledNavigation = styled('nav')(
  {
    display: 'flex',
    alignItems: 'center'
  },
  css({
    color: 'shade.7'
  }),
  compose(
    color,
    flexbox,
    grid,
    layout,
    space
  )
)
