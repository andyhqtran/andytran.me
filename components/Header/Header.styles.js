import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'

export const StyledHeader = styled('header')(
  {
    position: 'sticky',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 88
  },
  (props) => ({
    boxShadow: `inset 0 -1px 0 ${themeGet('colors.border')(props)}`
  }),
  css({
    backgroundColor: 'white'
  })
)
