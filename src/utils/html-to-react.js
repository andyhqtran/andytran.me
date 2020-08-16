/* eslint-disable react/display-name */
import { Parser, ProcessNodeDefinitions } from 'html-to-react';
import React from 'react';

import { Anchor } from 'primitives/Anchor';
import { Blockquote } from 'primitives/Blockquote';
import { Heading } from 'primitives/Heading';
import { Image } from 'primitives/Image';
import { Text } from 'primitives/Text';

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
    processNode: (node, children) => {
      return (
        <Heading as='h1' sx={{ my: 16 }} variant='h2'>
          {children}
        </Heading>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h2';
    },
    processNode: (node, children) => {
      return (
        <Heading as='h2' sx={{ my: 16 }} variant='h3'>
          {children}
        </Heading>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h3';
    },
    processNode: (node, children) => {
      return (
        <Heading as='h3' sx={{ my: 16 }} variant='h4'>
          {children}
        </Heading>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h4';
    },
    processNode: (node, children) => {
      return (
        <Heading as='h4' sx={{ my: 16 }} variant='h5'>
          {children}
        </Heading>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h5';
    },
    processNode: (node, children) => {
      return (
        <Heading as='h5' sx={{ my: 16 }} variant='h5'>
          {children}
        </Heading>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h6';
    },
    processNode: (node, children) => {
      return (
        <Heading as='h6' sx={{ my: 16 }} variant='h5'>
          {children}
        </Heading>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'p';
    },
    processNode: (node, children) => {
      if (children.length < 1) return <br />;

      return <Text sx={{ my: 16 }}>{children}</Text>;
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'blockquote';
    },
    processNode: (node, children) => {
      return <Blockquote sx={{ my: 24 }}>{children}</Blockquote>;
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'a';
    },
    processNode: (node, children) => {
      return (
        <Anchor
          href={node.attribs.href}
          sx={{
            fontSize: 'inherit',
            lineHeight: 'inherit',
          }}
        >
          {children}
        </Anchor>
      );
    },
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'img';
    },
    processNode: (node, children) => {
      return <Image src={node.attribs.src} />;
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
