import { rem } from 'polished'
import styled from 'styled-components'
import { color, space, typography, variant } from 'styled-system'

const StyledHeading = styled('h1')(
  {
    margin: 0
  },
  variant({
    prop: 'level',
    variants: {
      1: {
        fontSize: 'h1',
        fontWeight: 'black',
        letterSpacing: rem(-2),
        lineHeight: rem(76)
      },
      2: {
        fontSize: 'h2',
        fontWeight: 'black',
        letterSpacing: rem(-2), // @TODO: Figure out letter spacing for h2
        lineHeight: rem(76) // @TODO: Figure out line height for h2
      },
      3: {
        fontSize: 'h3',
        fontWeight: 'black',
        letterSpacing: rem(-0.3),
        lineHeight: rem(40)
      },
      4: {
        fontSize: 'h4',
        fontWeight: 'bold',
        letterSpacing: rem(-0.3),
        lineHeight: rem(40)
      }
    }
  }),
  color,
  space,
  typography
)

export { StyledHeading }
