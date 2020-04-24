import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Button } from 'components/Button'
import { Card } from 'components/Card'
import { Heading } from 'components/Heading'

const IndexPage = ({ description, title }) => {
  return (
    <Fragment>
      <Heading variant='h1'>{title}</Heading>
      {description}
      <Card>
        Index page
        <Button>View project &#10230;</Button>
      </Card>
    </Fragment>
  )
}

IndexPage.propTypes = {
  settings: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string
  }).isRequired
}

export default IndexPage
