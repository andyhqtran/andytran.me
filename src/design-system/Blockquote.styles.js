import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { color, compose, space } from 'styled-system'

export const StyledBlockquote = styled('blockquote', { shouldForwardProp })(
  {
    margin: 0
  },
  (props) => ({
    boxShadow: `inset 2px 0 0 ${themeGet('colors.shade.1')(props)}`
  }),
  css({
    paddingBottom: 4,
    paddingLeft: 6,
    paddingTop: 4,
    color: 'shade.5',
    fontSize: 3,
    fontStyle: 'italic'
  }),
  compose(
    color,
    space
  )
)
