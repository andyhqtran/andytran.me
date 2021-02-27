/* eslint-disable react/display-name */
import { Parser, ProcessNodeDefinitions } from 'html-to-react';
import React, { Fragment } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { Anchor } from 'primitives/Anchor';
import { Box } from 'primitives/Box';
import { Blockquote } from 'primitives/Blockquote';
import { Bold } from 'primitives/Bold';
import { Image } from 'primitives/Image';
import { Italic } from 'primitives/Italic';
import { PreformattedText } from 'primitives/PreformattedText';
import { Text } from 'primitives/Text';
import { Underline } from 'primitives/Underline';

const isValidNode = function () {
  return true;
};

const processNodeDefinitions = new ProcessNodeDefinitions(React);

const processingInstructions = [
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h1';
    },
    processNode: (node, children, index) => {
      return (
        <Text as='h1' css={{ mt: 40, mb: 16 }} key={index} variant='heading-50'>
          {children}
        </Text>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h2';
    },
    processNode: (node, children, index) => {
      return (
        <Text as='h2' css={{ mt: 40, mb: 16 }} key={index} variant='heading-32'>
          {children}
        </Text>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h3';
    },
    processNode: (node, children, index) => {
      return (
        <Text as='h3' css={{ mt: 40, mb: 16 }} key={index} variant='heading-24'>
          {children}
        </Text>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h4';
    },
    processNode: (node, children, index) => {
      return (
        <Text as='h4' css={{ mt: 40, mb: 16 }} key={index} variant='heading-18'>
          {children}
        </Text>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h5';
    },
    processNode: (node, children, index) => {
      return (
        <Text as='h5' css={{ mt: 40, mb: 16 }} key={index} variant='heading-14'>
          {children}
        </Text>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h6';
    },
    processNode: (node, children, index) => {
      return (
        <Text as='h6' css={{ mt: 40, mb: 16 }} key={index} variant='heading-12'>
          {children}
        </Text>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'u';
    },
    processNode: (node, children, index) => {
      return <Underline>{children}</Underline>;
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'strong';
    },
    processNode: (node, children, index) => {
      return <Bold>{children}</Bold>;
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'em';
    },
    processNode: (node, children, index) => {
      return <Italic>{children}</Italic>;
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'p';
    },
    processNode: (node, children, index) => {
      if (children.length < 1) return <br />;

      return (
        <Text as='p' css={{ mb: 24 }} key={index}>
          {children}
        </Text>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'blockquote';
    },
    processNode: (node, children, index) => {
      return (
        <Blockquote css={{ my: 24 }} key={index}>
          {children}
        </Blockquote>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'a';
    },
    processNode: (node, children, index) => {
      return (
        <Anchor href={node.attribs.href} key={index}>
          {children}
        </Anchor>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'figure';
    },
    processNode: (node, children, index) => {
      return (
        <Box as='figure' key={index}>
          {children}
        </Box>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'figcaption';
    },
    processNode: (node, children, index) => {
      return (
        <Box as='figcaption' key={index} css={{ mt: 24, textAlign: 'center' }}>
          {children}
        </Box>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'img';
    },
    processNode: (node, children, index) => {
      return <Image key={index} src={node.attribs.src} />;
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      const nodeClass = node?.attribs?.class;
      const containsLanguageClass = nodeClass?.includes('language-');
      const language =
        containsLanguageClass && nodeClass.replace('language-', '');
      const isValidLanguage = [
        ...SyntaxHighlighter.supportedLanguages,
        'html',
      ].includes(language);
      const hasParent = node?.hasParent;

      return (
        node.name === 'code' &&
        containsLanguageClass &&
        isValidLanguage &&
        !hasParent
      );
    },
    processNode: (node, children, index) => {
      const language = node?.attribs?.class.replace('language-', '');
      const isValidLanguage = [
        ...SyntaxHighlighter.supportedLanguages,
        'html',
      ].includes(language);

      return (
        <PreformattedText
          key={index}
          css={{ mb: 48 }}
          language={isValidLanguage && language}
        >
          {children}
        </PreformattedText>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'pre';
    },
    processNode: (node, children, index) => {
      return <Fragment key={index}>{children}</Fragment>;
    },
  },
  {
    shouldProcessNode: function (node) {
      return true;
    },
    processNode: processNodeDefinitions.processDefaultNode,
  },
];

const htmlParser = new Parser();

export const parseHTML = (input) => {
  return htmlParser.parseWithInstructions(
    input,
    isValidNode,
    processingInstructions,
  );
};
