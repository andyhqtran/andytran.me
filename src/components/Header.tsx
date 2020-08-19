import { motion } from 'framer-motion';
import { transitions } from 'polished';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

import { Logo } from 'components/Logo';
import { SocialIcons, SocialIconsNames } from 'components/SocialIcons';
import { Box, BoxProps } from 'primitives/Box';
import { Heading } from 'primitives/Heading';
import { ArrowLeftIcon, ArrowRightIcon } from 'primitives/Icon';
import { IconButton } from 'primitives/IconButton';
import { Text } from 'primitives/Text';
import { useScrollPercentage } from 'utils/useScrollPercentage';

export type HeaderProps = BoxProps & {
  nextPost?: {
    slug: string;
  };
  postTitle?: string;
  prevPost?: {
    slug: string;
  };
  socialIcons: {
    label: SocialIconsNames;
    url: string;
  }[];
  title: string;
};

export const Header = ({
  nextPost,
  postTitle,
  prevPost,
  socialIcons,
  title,
}: HeaderProps) => {
  const { hasMounted, percentage, scrollPosition } = useScrollPercentage();
  const hasScrolled = scrollPosition > 0;
  const router = useRouter();

  const isPostsPage = router && router.pathname === '/posts/[slug]';

  const hasPrevPost =
    prevPost &&
    prevPost.constructor === Object &&
    Object.keys(prevPost).length !== 0;
  const hasNextPost =
    nextPost &&
    nextPost.constructor === Object &&
    Object.keys(nextPost).length !== 0;

  return (
    <Box
      as='header'
      __css={{
        zIndex: 1,
        position: 'sticky',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'inverse',
        height: 88,
        borderBottom: '1px solid',
        borderColor:
          isPostsPage || (hasMounted && hasScrolled) ? 'tint2' : 'transparent',
        ...transitions(['border-color', '0.2s ease']),
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          width: '100%',
          maxWidth: 1184,
          mx: 'auto',
        }}
      >
        <AnimatePresence>
          {hasPrevPost && isPostsPage && (
            <Link as={`/posts/${prevPost.slug}`} href='/posts/[slug]' passHref>
              <IconButton
                animate={{ x: 0, opacity: 1 }}
                aria-label='Previous post'
                as={motion.a}
                exit={{ x: 28, opacity: 0 }}
                initial={{ x: 28, opacity: 0 }}
                key='previous-arrow'
                role='button'
                sx={{ position: 'absolute', right: 'calc(100% + 16px)' }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeftIcon />
              </IconButton>
            </Link>
          )}
        </AnimatePresence>
        <Logo
          css={{
            cursor: 'pointer',
          }}
          onClick={() => Router.push('/').then(() => window.scrollTo(0, 0))}
          title={title}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AnimatePresence>
            {isPostsPage && (
              <Box
                as={motion.div}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                initial={{ y: 12, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Text
                  sx={{
                    color: 'tint5',
                    fontSize: 12,
                    fontWeight: 'bold',
                    letterSpacing: 0.8,
                    textAlign: 'center',
                    textTransform: 'uppercase',
                  }}
                >
                  Case study
                </Text>
                <Heading
                  sx={{
                    color: 'tint6',
                    letterSpacing: 0.8,
                    textAlign: 'center',
                    textTransform: 'uppercase',
                  }}
                  variant='h6'
                >
                  {postTitle}
                </Heading>
              </Box>
            )}
          </AnimatePresence>
        </Box>
        {!isPostsPage && (
          <SocialIcons
            icons={socialIcons}
            sx={{ justifyContent: 'flex-end' }}
          />
        )}
        <AnimatePresence>
          {hasNextPost && isPostsPage && (
            <Link as={`/posts/${nextPost.slug}`} href='/posts/[slug]' passHref>
              <IconButton
                animate={{ x: 0, opacity: 1 }}
                aria-label='Next post'
                as={motion.a}
                exit={{ x: -28, opacity: 0 }}
                initial={{ x: -28, opacity: 0 }}
                key='next-arrow'
                sx={{ position: 'absolute', left: 'calc(100% + 16px)' }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRightIcon />
              </IconButton>
            </Link>
          )}
        </AnimatePresence>
      </Box>
      {isPostsPage && (
        <Box
          animate={{ width: `${percentage}%` }}
          as={motion.div}
          initial={{ width: 0 }}
          transition={{ duration: 0.1, type: 'tween' }}
          sx={{
            position: 'absolute',
            bottom: -4,
            left: 0,
            right: 0,
            backgroundColor: 'primary',
            height: 4,
          }}
        />
      )}
    </Box>
  );
};
