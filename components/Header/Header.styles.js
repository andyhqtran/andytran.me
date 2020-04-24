import styled from '@emotion/styled'
import { css } from '@styled-system/css'

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
  css({
    backgroundColor: 'white'
  })
)
