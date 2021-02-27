import { motion } from 'framer-motion';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

import { Container } from 'components/Container';
import { Logo } from 'components/Logo';
import { SocialIcons, SocialIconsNames } from 'components/SocialIcons';
import { Box, BoxProps } from 'primitives/Box';
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
      css={{
        zIndex: 1,
        position: 'sticky',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$background',
        height: 88,
        borderBottom: '1px solid',
        borderColor:
          isPostsPage || (hasMounted && hasScrolled)
            ? '$gray200'
            : 'transparent',
      }}
    >
      <Container
        css={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        <AnimatePresence>
          {hasPrevPost && isPostsPage && (
            <Link as={`/posts/${prevPost.slug}`} href='/posts/[slug]' passHref>
              <IconButton
                animate={{ x: 0, opacity: 1 }}
                aria-label='Previous post'
                as={motion.a}
                css={{
                  position: 'absolute',
                  right: 'calc(100% - 56px)',
                  when: {
                    desktop: {
                      right: 'calc(100% + 16px - 56px)',
                    },
                  },
                }}
                exit={{ x: 28, opacity: 0 }}
                initial={{ x: 28, opacity: 0 }}
                key='previous-arrow'
                role='button'
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
          css={{
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
                  as='p'
                  css={{ color: '$gray500', textAlign: 'center' }}
                  variant='heading-12-uppercase'
                >
                  Case study
                </Text>
                <Text
                  as='h6'
                  css={{ color: '$gray600', textTransform: 'uppercase' }}
                  variant='heading-14-uppercase'
                >
                  {postTitle}
                </Text>
              </Box>
            )}
          </AnimatePresence>
        </Box>
        {!isPostsPage && (
          <SocialIcons
            css={{ justifyContent: 'flex-end' }}
            icons={socialIcons}
          />
        )}
        <AnimatePresence>
          {hasNextPost && isPostsPage && (
            <Link as={`/posts/${nextPost.slug}`} href='/posts/[slug]' passHref>
              <IconButton
                animate={{ x: 0, opacity: 1 }}
                aria-label='Next post'
                as={motion.a}
                css={{
                  position: 'absolute',
                  left: 'calc(100% - 56px)',
                  when: {
                    desktop: {
                      left: 'calc(100% + 16px - 56px)',
                    },
                  },
                }}
                exit={{ x: -28, opacity: 0 }}
                initial={{ x: -28, opacity: 0 }}
                key='next-arrow'
                transition={{ duration: 0.2 }}
              >
                <ArrowRightIcon />
              </IconButton>
            </Link>
          )}
        </AnimatePresence>
      </Container>
      {isPostsPage && (
        <Box
          animate={{ width: `${percentage}%` }}
          as={motion.div}
          css={{
            position: 'absolute',
            bottom: -4,
            left: 0,
            right: 0,
            backgroundColor: '$blue800',
            height: 4,
          }}
          initial={{ width: 0 }}
          transition={{ duration: 0.1, type: 'tween' }}
        />
      )}
    </Box>
  );
};
