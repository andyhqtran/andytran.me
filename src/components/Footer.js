import PropTypes from 'prop-types';
import React from 'react';

import { Navigation } from 'components/Navigation';
import { Block } from 'design-system/Block';
import { StyledFooter } from './Footer.styles';

export const Footer = ({ navigation, title }) => {
  return (
    <StyledFooter>
      <Block>Copyright &copy; {title}</Block>
      <Navigation color='inherit' fontSize={14} items={navigation} />
    </StyledFooter>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  title: PropTypes.string,
};
