import React, { Fragment } from 'react';

import { Heading } from 'design-system/Heading';

export default {
  title: 'Design System/Heading',
  component: Heading,
};

export const preview = () => {
  return <Heading>Heading</Heading>;
};

export const variants = () => {
  return (
    <Fragment>
      <Heading variant="h1">Heading 1</Heading>
      <Heading variant="h2">Heading 2</Heading>
      <Heading variant="h3">Heading 3</Heading>
      <Heading variant="h4">Heading 4</Heading>
      <Heading variant="h5">Heading 5</Heading>
      <Heading variant="h6">Heading 6</Heading>
    </Fragment>
  );
};
