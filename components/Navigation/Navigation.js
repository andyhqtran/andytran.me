import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { Link } from 'components/Link'
import { StyledNavigation } from './Navigation.styles'

const Navigation = ({ className, items, ...restOfProps }) => {
  return (
    <StyledNavigation
      className={className}
      {...pick(restOfProps)}
    >
      {items && items.map((item, index) => (
        <Link
          color='inherit'
          external
          href={item.url}
          key={item.label}
          mr={items.length !== index && 4}
        >
          {item.label}
        </Link>
      ))}
    </StyledNavigation>
  )
}

Navigation.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string
  })),
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.grid,
  ...propTypes.layout,
  ...propTypes.space
}

export default Navigation
