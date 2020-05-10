import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import NextLink from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledLink } from './Link.styles'

const Link = ({
  as,
  children,
  className,
  href,
  passHref,
  prefetch,
  replace,
  scroll,
  shallow,
  ...restOfProps
}) => {
  return (
    <NextLink
      as={as}
      href={href}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <StyledLink
        className={className}
        {...pick(restOfProps)}
      >
        {children}
      </StyledLink>
    </NextLink>
  )
}

Link.defaultProps = {
  href: '/',
  passHref: true,
  prefetch: true,
  replace: false,
  scroll: true
}

Link.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  href: PropTypes.string,
  passHref: PropTypes.bool,
  prefetch: PropTypes.bool,
  replace: PropTypes.bool,
  scroll: PropTypes.bool,
  shallow: PropTypes.bool,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography
}

export default Link
