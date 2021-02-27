import React, { Component, createContext, useContext } from 'react';
import { createPortal } from 'react-dom';

import { Anchor } from 'primitives/Anchor';
import { Box } from 'primitives/Box';

export const Toast = (props) => {
  return (
    <Box
      __themeKey='toasts'
      {...props}
      css={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'inverse',
        border: '1px solid',
        borderColor: '$gray200',
        borderRadius: 8,
        p: 16,
        boxShadow: '0 2px 8px $colors$gray100',
        fontSize: 14,
      }}
    />
  );
};

export const ToastContainer = (props) => {
  return (
    <Box
      {...props}
      css={{
        zIndex: 2,
        position: 'fixed',
        top: 88,
        right: 0,
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        maxHeight: '100%',
        p: 24,
        overflow: 'hidden',
      }}
    />
  );
};

export const ToastContext = createContext(null);

export class ToastProvider extends Component {
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
                      <Box css={{ ml: 40, mr: 8 }}>
                        {toast.actions.map((action, index) => {
                          const isLastItem = toast.actions.length - 1 !== index;
                          return (
                            <Anchor
                              css={{
                                mr: isLastItem ? 24 : 0,
                              }}
                              href={action.url}
                              key={action.label}
                            >
                              {action.label}
                            </Anchor>
                          );
                        })}
                      </Box>
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
