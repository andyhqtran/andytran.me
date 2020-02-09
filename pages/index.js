import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { getSettings } from 'api/settings'
import { Button } from 'components/Button'
import { Card } from 'components/Card'
import { Heading } from 'components/Heading'

const IndexPage = ({ settings }) => {
  return (
    <Fragment>
      <Heading level={1}>{settings.title}</Heading>
      {settings.description}
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

IndexPage.getInitialProps = async () => {
  const settings = await getSettings()

  return { settings }
}

export default IndexPage
