export type ChangelogType = 'bugfix' | 'feature' | 'improvement' | 'other';

export type Changelog = {
  title: string;
  description: string;
  type: ChangelogType;
};

export const CHANGELOG: Changelog[] = [
  {
    title: 'Improved character search',
    description:
      "We've released an improved version of the character search that will allow to view a list of characters with similar values to the search term. This will allow you to find characters that you might not have known about before.",
    type: 'improvement',
  },
  {
    title: 'Character search',
    description:
      "We've released an early version of the characters page. This page currently lets you search for a character and view their equipment only.",
    type: 'feature',
  },
];
