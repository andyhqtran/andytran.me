export type ChangelogType = 'bugfix' | 'feature' | 'improvement' | 'other';

export type Changelog = {
  title: string;
  description: string;
  type: ChangelogType;
};

export const CHANGELOG: Changelog[] = [];
