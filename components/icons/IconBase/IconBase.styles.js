import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { background, color, compose, flexbox, layout, space } from 'styled-system'

export const StyledIconBase = styled(motion.svg)(
  {
    display: 'block',
    width: 24,
    height: 24
  },
  compose(
    background,
    color,
    flexbox,
    layout,
    space
  )
)
