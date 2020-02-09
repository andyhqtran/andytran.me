import { rem } from 'polished'
import styled from 'styled-components'
import { margin } from 'styled-system'

const StyledButton = styled.button`
  outline: none;
  background-color: transparent;
  height: 56px;
  border: 0;
  border-radius: 36px;
  box-shadow: inset 0 0 0 1px #2B2927;
  padding: 0 32px;
  ${margin}
  color: #DCDAD8;
  font-family: Inter, sans-serif;
  font-size: ${rem(18)};
  letter-spacing: ${rem(-0.2)};
  cursor: pointer;
`

export { StyledButton }
