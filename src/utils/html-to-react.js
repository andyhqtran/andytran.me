/* eslint-disable react/display-name */
import { Parser, ProcessNodeDefinitions } from 'html-to-react'
import React from 'react'

import { Blockquote } from 'design-system/Blockquote'
import { Heading } from 'design-system/Heading'
import { Paragraph } from 'design-system/Paragraph'

const isValidNode = function () {
  return true
}

const processNodeDefinitions = new ProcessNodeDefinitions(React)

const processingInstructions = [
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h1'
    },
    processNode: (node, children) => {
      return <Heading as='h1' my={4} variant='h2'>{children}</Heading>
    }
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h2'
    },
    processNode: (node, children) => {
      return <Heading as='h2' my={4} variant='h3'>{children}</Heading>
    }
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h3'
    },
    processNode: (node, children) => {
      return <Heading as='h3' my={4} variant='h4'>{children}</Heading>
    }
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h4'
    },
    processNode: (node, children) => {
      return <Heading as='h4' my={4} variant='h5'>{children}</Heading>
    }
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h5'
    },
    processNode: (node, children) => {
      return <Heading as='h5' my={4} variant='h5'>{children}</Heading>
    }
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h6'
    },
    processNode: (node, children) => {
      return <Heading as='h6' my={4} variant='h5'>{children}</Heading>
    }
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'p'
    },
    processNode: (node, children) => {
      if (children.length < 1) return <br />

      return <Paragraph my={6}>{children}</Paragraph>
    }
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'blockquote'
    },
    processNode: (node, children) => {
      return <Blockquote mb={6}>{children}</Blockquote>
    }
  },
  {
    shouldProcessNode: function (node) {
      return true
    },
    processNode: processNodeDefinitions.processDefaultNode
  }
]

const htmlParser = new Parser()

export const parseHTML = (input) => {
  return htmlParser.parseWithInstructions(input, isValidNode, processingInstructions)
}
