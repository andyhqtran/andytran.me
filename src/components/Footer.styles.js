import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'

export const StyledFooter = styled('footer')(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1184,
    height: 88,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  (props) => ({
    boxShadow: `inset 0 1px 0 ${themeGet('colors.shade.1')(props)}`
  }),
  css({
    marginBottom: 24,
    marginTop: 24,
    color: 'shade.5',
    fontSize: 14
  })
)
