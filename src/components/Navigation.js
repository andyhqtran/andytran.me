import propTypes from '@styled-system/prop-types';
import { pick } from '@styled-system/props';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'design-system/Link';
import { StyledNavigation } from './Navigation.styles';

export const Navigation = ({ className, items, ...restOfProps }) => {
  const router = useRouter();

  return (
    <StyledNavigation className={className} {...pick(restOfProps)}>
      {items &&
        items.map((item, index) => (
          <Link
            color="inherit"
            external
            fontSize="inherit"
            onClick={() => {
              window.analytics.track('Navigation link clicked', {
                pathname: router.pathname,
                name: item.label,
                url: item.url,
              });
            }}
            href={item.url}
            key={item.label}
            mr={items.length - 1 !== index ? 4 : 0}
          >
            {item.label}
          </Link>
        ))}
    </StyledNavigation>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.grid,
  ...propTypes.layout,
  ...propTypes.space,
};
