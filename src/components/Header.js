import { motion } from 'framer-motion';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

import { Logo } from 'components/Logo';
import { SocialIcons } from 'components/SocialIcons';
import { Box } from 'primitives/Box';
import { Heading } from 'primitives/Heading';
import { ArrowLeftIcon, ArrowRightIcon } from 'primitives/Icon';
import { IconButton } from 'primitives/IconButton';
import { Text } from 'primitives/Text';

export const Header = ({
  nextPost,
  postTitle,
  prevPost,
  socialIcons,
  title,
}) => {
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
      sx={{
        zIndex: 1,
        position: 'sticky',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'shade.inverse',
        height: 88,
        boxShadow: ({ colors }) => `inset 0 -1px 0 ${colors.shade[1]}`,
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
                    color: 'shade.4',
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
                    color: 'shade.5',
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
    </Box>
  );
};
