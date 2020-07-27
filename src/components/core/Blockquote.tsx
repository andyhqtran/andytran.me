import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { css } from '@styled-system/css';
import { HTMLProps } from 'react';

import { Box, BoxProps } from 'components/core/Box';

export const Blockquote = styled(Box.withComponent('blockquote'), {
  shouldForwardProp,
})<HTMLProps<HTMLQuoteElement> & BoxProps>(
  css({
    margin: 0,
    borderLeft: '2px solid',
    borderColor: 'shade.1',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    color: 'shade.5',
    fontStyle: 'italic',
  }),
);
