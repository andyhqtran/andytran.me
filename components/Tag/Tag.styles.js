import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { motion } from 'framer-motion'
import { rgba, transitions } from 'polished'
import { background, color, compose, flexbox, layout, position, space } from 'styled-system'
export const StyledTag = styled(motion.a)(
  {
    outline: 'none',
    display: 'block',
    width: 56,
    height: 56,
    borderRadius: '100%',
    overflow: 'hidden',
    cursor: 'pointer',
    userSelect: 'none'
  },
  transitions('box-shadow', '0.2s ease'),
  (props) => ({
    '&:focus': {
      boxShadow: `0 0 0 2px ${rgba(themeGet('colors.primary')(props), 0.36)}`
    }
  }),
  css({
    backgroundColor: 'contrast'
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
