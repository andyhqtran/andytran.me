/* eslint-disable react/display-name */
import { Parser, ProcessNodeDefinitions } from 'html-to-react'
import React from 'react'

import { Heading } from 'components/Heading'
import { Paragraph } from 'components/Paragraph'

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
      return <Heading as='h1' mb={4} variant='h3'>{children}</Heading>
    }
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h2'
    },
    processNode: (node, children) => {
      return <Heading as='h2' mb={4} variant='h4'>{children}</Heading>
    }
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h3'
    },
    processNode: (node, children) => {
      return <Heading as='h3' mb={4} variant='h5'>{children}</Heading>
    }
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h4'
    },
    processNode: (node, children) => {
      return <Heading as='h4' mb={4} variant='h5'>{children}</Heading>
    }
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h5'
    },
    processNode: (node, children) => {
      return <Heading as='h5' mb={4} variant='h5'>{children}</Heading>
    }
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'h6'
    },
    processNode: (node, children) => {
      return <Heading as='h6' mb={4} variant='h5'>{children}</Heading>
    }
  },
  {
    replaceChildren: false,
    shouldProcessNode: (node) => {
      return node.name === 'p'
    },
    processNode: (node, children) => {
      return <Paragraph mb={6}>{children}</Paragraph>
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
