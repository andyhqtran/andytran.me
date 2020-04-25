import React from 'react'

import { Block } from 'components/Block'
import { Button } from 'components/Button'
import { Heading } from 'components/Heading'
import { Paragraph } from 'components/Paragraph'
import { Window } from 'components/Window'
import { StyledPostCard } from './PostCard.styles'

const PostCard = ({ ...restOfProps }) => {
  return (
    <StyledPostCard>
      <Block alignItems='flex-start' display='flex' flexDirection='column' maxWidth={520} p={14}>
        <Heading mb={4} variant='h2'>
          Automation Library
        </Heading>
        <Paragraph color='description' mb={10}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Paragraph>
        <Button>View project &#10230;</Button>
      </Block>
      <Window position='relative' right={-20} top={56} width={620} />
    </StyledPostCard>
  )
}

export default PostCard
