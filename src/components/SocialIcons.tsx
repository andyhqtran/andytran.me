import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';
import {
  CodePenIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from 'primitives/Icon';
import { IconButton } from 'primitives/IconButton';

export type SocialIconsNames = 'codepen' | 'github' | 'linkedin' | 'twitter';

export type SocialIconsProps = BoxProps & {
  icons: {
    label: SocialIconsNames;
    url: string;
  }[];
};

export const SocialIcons = ({ icons, ...restOfProps }: SocialIconsProps) => {
  const router = useRouter();

  const iconRenderer = (name: SocialIconsNames) => {
    switch (name) {
      case 'codepen':
        return <CodePenIcon />;
      case 'github':
        return <GithubIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      case 'twitter':
        return <TwitterIcon />;
    }
  };

  return (
    <Box {...restOfProps} __css={{ display: 'flex' }}>
      {icons?.map((icon) => {
        if (!icon.label) return;

        return (
          <IconButton
            aria-label={icon.label}
            as={motion.a}
            href={icon.url}
            key={icon.label}
            onClick={() => {
              window.analytics.track('Social button clicked', {
                pathname: router.pathname,
                name: icon.label,
                url: icon.url,
              });
            }}
            rel='noreferrer noopener'
            target='_blank'
          >
            {iconRenderer(icon.label)}
          </IconButton>
        );
      })}
    </Box>
  );
};
