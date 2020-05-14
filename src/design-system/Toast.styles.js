import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { background, color, compose, layout, position, space } from 'styled-system'

export const StyledToast = styled(motion.div)(
  {
    display: 'flex',
    alignItems: 'center'
  },
  (props) => ({
    boxShadow: `inset 0 0 0 1px ${themeGet('colors.shade.1')(props)}, 0 2px 8px ${themeGet('colors.shade.1')(props)}`
  }),
  css({
    backgroundColor: 'shade.inverse',
    padding: 4,
    fontSize: 1
  }),
  compose(
    background,
    color,
    layout,
    position,
    space
  )
)

export const StyledToastContainer = styled(motion.div)(
  {
    zIndex: 2,
    position: 'fixed',
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  css({
    padding: 6
  })
)
