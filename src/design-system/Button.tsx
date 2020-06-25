import { pick } from '@styled-system/props'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import * as React from 'react'

import { StyledButton } from './Button.styles'

export interface ButtonProps {
  children: React.ReactNode,
  className?: string,
  onClick?: React.MouseEvent<HTMLDivElement>,
  type: 'button' | 'submit' | 'reset'
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  className,
  onClick,
  type,
  ...restOfProps
}) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      type={type}
      {...pick(restOfProps)}
    >
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  type: 'button'
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    'button',
    'submit',
    'reset'
  ]),
  ...propTypes.background,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography
}
