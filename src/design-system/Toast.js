import propTypes from '@styled-system/prop-types';
import { pick } from '@styled-system/props';
import React, { Component, createContext, useContext } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Block } from 'design-system/Block';
import { Link } from 'design-system/Link';
import { motionPick } from 'utils/motion-props';
import { StyledToast, StyledToastContainer } from './Toast.styles';

export const Toast = ({ children, className, ...restOfProps }) => {
  return (
    <StyledToast
      className={className}
      {...motionPick(restOfProps)}
      {...pick(restOfProps)}
    >
      {children}
    </StyledToast>
  );
};

Toast.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  ...propTypes.background,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
};

export const ToastContainer = ({ children, className, ...restOfProps }) => {
  return (
    <StyledToastContainer
      className={className}
      {...motionPick(restOfProps)}
      {...pick(restOfProps)}
    >
      {children}
    </StyledToastContainer>
  );
};

ToastContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export const ToastContext = createContext(null);

export class ToastProvider extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  state = {
    mounted: false,
    toasts: [
      {
        actions: [
          {
            label: 'View on Github',
            external: true,
            url: 'https://github.com/andyhqtran/andytran.me',
          },
        ],
        content: 'This website is currently under-construction',
        id: 'temporary-hardcoded',
      },
    ],
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    const { children } = this.props;
    const { mounted, toasts } = this.state;

    return (
      <ToastContext.Provider>
        {children}
        {mounted &&
          createPortal(
            <ToastContainer
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                    delayChildren: 0.4,
                    staggerChildren: 0.1,
                    staggerDirection: -1,
                  },
                },
              }}
              initial='hidden'
              animate='show'
            >
              {toasts.map((toast, index) => {
                return (
                  <Toast
                    key={toast.id}
                    mb={toasts.length - 1 !== index && 24}
                    variants={{
                      hidden: { x: '100%' },
                      show: {
                        x: 0,
                        transition: { damping: 16, type: 'spring' },
                      },
                    }}
                  >
                    {toast.content}
                    {toast.actions && (
                      <Block ml={40} mr={8}>
                        {toast.actions.map((action, index) => {
                          return (
                            <Link
                              fontSize='inherit'
                              external={action.external}
                              href={action.url}
                              key={action.label}
                              mr={toast.actions.length - 1 !== index && 24}
                            >
                              {action.label}
                            </Link>
                          );
                        })}
                      </Block>
                    )}
                  </Toast>
                );
              })}
            </ToastContainer>,
            document.querySelector('#notifications'),
          )}
      </ToastContext.Provider>
    );
  }
}

export const useToasts = () => {
  const context = useContext(ToastContext);

  return {
    addToast: context.add,
    removeAllToasts: context.removeAll,
    removeToast: context.remove,
  };
};
