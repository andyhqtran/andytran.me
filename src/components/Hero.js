import { pick } from '@styled-system/props';
import PropTypes from 'prop-types';
import React from 'react';

import { Navigation } from 'components/Navigation';
import { PageTitle } from 'components/PageTitle';
import { Block } from 'design-system/Block';

export const Hero = ({ description, navigation, title, ...restOfProps }) => {
  return (
    <Block px={56} py={64} {...pick(restOfProps)}>
      <PageTitle description={description} maxWidth={526} title={title} />
      {navigation && <Navigation items={navigation} mt={24} />}
    </Block>
  );
};

Hero.propTypes = {
  description: PropTypes.string,
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  title: PropTypes.string,
};
