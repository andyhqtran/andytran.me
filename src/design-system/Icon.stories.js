import React, { Fragment } from 'react';

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CodePenIcon,
  GithubIcon,
  Icon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from 'design-system/Icon';

export default {
  title: 'Design System/Icon',
  component: Icon,
};

export const preview = () => {
  return (
    <Fragment>
      <ArrowLeftIcon />
      <ArrowRightIcon />
      <CodePenIcon />
      <GithubIcon />
      <LinkedInIcon />
      <MoonIcon />
      <SunIcon />
      <TwitterIcon />
    </Fragment>
  );
};

export const arrowLeft = () => {
  return <ArrowLeftIcon />;
};

export const arrowRight = () => {
  return <ArrowRightIcon />;
};

export const codepen = () => {
  return <CodePenIcon />;
};

export const github = () => {
  return <GithubIcon />;
};

export const linkedin = () => {
  return <LinkedInIcon />;
};

export const moon = () => {
  return <MoonIcon />;
};

export const sun = () => {
  return <SunIcon />;
};

export const twitter = () => {
  return <TwitterIcon />;
};
