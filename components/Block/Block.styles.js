import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { motion } from 'framer-motion'
import { background, border, color, compose, flexbox, grid, layout, position, shadow, space, typography } from 'styled-system'

export const StyledBlock = styled(motion.div, { shouldForwardProp })(
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
