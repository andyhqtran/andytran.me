import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import NextLink from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledLink } from './Link.styles'

export const Link = ({
  as,
  children,
  className,
  external,
  href,
  onClick,
  passHref,
  prefetch,
  replace,
  scroll,
  shallow,
  target,
  ...restOfProps
}) => {
  if (external) {
    return (
      <StyledLink
        className={className}
        href={href}
        onClick={onClick}
        target={target}
        {...pick(restOfProps)}
      >
        {children}
      </StyledLink>
    )
  }

  return (
    <NextLink
      as={as}
      href={href}
      onClick={onClick}
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
  external: false,
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
  external: PropTypes.bool,
  href: PropTypes.string,
  passHref: PropTypes.bool,
  prefetch: PropTypes.bool,
  replace: PropTypes.bool,
  scroll: PropTypes.bool,
  shallow: PropTypes.bool,
  target: PropTypes.string,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography
}
