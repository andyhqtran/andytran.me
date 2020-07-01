import { pick } from '@styled-system/props'
import propTypes from '@styled-system/prop-types'
import React, { FunctionComponent, MouseEvent, ReactNode } from 'react'

import { StyledButton } from './Button.styles'

export type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  children: ReactNode,
  className?: string,
  onClick?: MouseEvent<HTMLButtonElement>,
  type?: ButtonType
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  onClick,
  type = 'button',
  ...restOfProps
}: ButtonProps) => {
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
