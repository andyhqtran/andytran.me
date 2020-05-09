import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { transitions } from 'polished'
import { background, color, compose, flexbox, layout, position, space, typography } from 'styled-system'

export const StyledIconButton = styled('button')(
  {
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    border: 0,
    borderRadius: '100%',
    cursor: 'pointer'
  },
  transitions(['background-color', 'color', 'box-shadow'], '0.2s ease'),
  (props) => ({
    '&:focus': {
      boxShadow: `inset 0 0 0 1px ${themeGet('colors.border')(props)}`
    }
  }),
  css({
    color: 'shade.4',
    '&:focus, &:hover': {
      color: 'shade.7'
    },
    '&:hover': {
      backgroundColor: 'contrast'
    }
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
