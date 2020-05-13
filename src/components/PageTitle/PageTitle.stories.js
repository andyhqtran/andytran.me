import React from 'react'

import { PageTitle } from 'components/PageTitle'

export default {
  title: 'Page/PageTitle',
  component: PageTitle
}

export const preview = () => {
  return (
    <PageTitle
      description='Senior UI Engineer'
      title='Andy Tran'
    />
  )
}
