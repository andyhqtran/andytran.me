export type ChangelogType = 'bugfix' | 'feature' | 'improvement' | 'other';

export type Changelog = {
  title: string;
  description: string;
  type: ChangelogType;
};

export const CHANGELOG: Changelog[] = [
  {
    title: 'Character search',
    description:
      "We've released an early version of the characters page. This page currently lets you search for a character and view their equipment only.",
    type: 'feature',
  },
];
