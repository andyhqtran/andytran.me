import propTypes from '@styled-system/prop-types';
import { pick } from '@styled-system/props';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { createElement } from 'react';

import { Block } from 'design-system/Block';
import {
  CodePenIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from 'design-system/Icon';
import { IconButton } from 'primitives/IconButton';

const iconMap = {
  codepen: CodePenIcon,
  github: GithubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
};

export const SocialIcons = ({ className, icons, ...restOfProps }) => {
  const router = useRouter();

  return (
    <Block className={className} display='flex' {...pick(restOfProps)}>
      {icons &&
        icons.map((icon) => {
          if (!icon.label || !(icon.label.toLowerCase() in iconMap)) return;

          return (
            <IconButton
              key={icon.label}
              name={icon.label}
              onClick={() => {
                window.analytics.track('Social button clicked', {
                  pathname: router.pathname,
                  name: icon.label,
                  url: icon.url,
                });

                window.location.href = icon.url;
              }}
            >
              {createElement(iconMap[icon.label.toLowerCase()], null, null)}
            </IconButton>
          );
        })}
    </Block>
  );
};

SocialIcons.propTypes = {
  className: PropTypes.string,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOf(['CodePen', 'Github', 'LinkedIn', 'Twitter']),
      url: PropTypes.string,
    }),
  ),
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.grid,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  ...propTypes.typography,
};
