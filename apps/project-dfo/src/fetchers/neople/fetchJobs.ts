import slugify from 'slugify';

import { API_REVALIDATION } from '~/components/revalidate';
import { API_KEY, API_URL } from '~/constants/env';
import { type Job } from '~/types/neople';

const JOB_ORDER = [
  '40132cbc8b2b5eedfe035e35c322472e',
  '08cf6465c8dfcdbf5a896b40a2811007',
  'cb572073a5db60ca7f245363a79d1f22',
  '18ccc1f38ad764c77ec52dbaefce0c2e',
  '374f82bfb1c054cde79431cf4420a35c',
  '8b680595b273a488997441eee3f7176f',
  '3c67a7b71273c8452c9f68adb4004215',
  'fc067d0781f1d01ef8f0b215440bac6d',
  '92d1c40f5e486e3aa4fae8db283d1fd3',
  '2ae47d662a9b18848c5e314966765bd7',
  '402e7bc8074a3dcd7797da85a9f7386e',
  'c21b43973c6d3fd9f192e9b66925c9b9',
  '0b2b0ac15e70d4fc9f4094b9a90937a6',
  '86c10841b1e4ddc6db7bd2fbe5e11519',
  'dbbdf2dd28072b26f22b77454d665f21',
  '4b3bc88bb6337d2e23ed3411b2435068',
  'c95dfe0d42b6c71bc8019fcca0b3eccd',
];

const JOB_EXPLAIN = {
  '40132cbc8b2b5eedfe035e35c322472e': "A swordsman possessed by a demon called 'Kazan' in their left arm.",
  '08cf6465c8dfcdbf5a896b40a2811007': 'Dominates her enemies with blade and strength of majin imbued in her arm.',
  cb572073a5db60ca7f245363a79d1f22: 'A disciplined warrior who seeks the true might.',
  '18ccc1f38ad764c77ec52dbaefce0c2e': 'A gifted warrior who tries to prove his might.',
  '374f82bfb1c054cde79431cf4420a35c': 'An Empyrean warrior who handles firearms with expertise.',
  '8b680595b273a488997441eee3f7176f': 'An Empyrean warrior who handles firearms with expertise.',
  '3c67a7b71273c8452c9f68adb4004215': 'A Pandemonian mage who freely wields the mysterious power of magic.',
  fc067d0781f1d01ef8f0b215440bac6d: 'A little Pandemonian girl who use various elemental magic.',
  '92d1c40f5e486e3aa4fae8db283d1fd3':
    'A priest who received revelations from God and has been trained to destroy evil and protect his allies.',
  '2ae47d662a9b18848c5e314966765bd7': 'A saint who carries out prophecies of the Divine.',
  '402e7bc8074a3dcd7797da85a9f7386e':
    'Dark elf assassin who eliminates enemies with deadly strikes using their speed and agility.',
  c21b43973c6d3fd9f192e9b66925c9b9:
    'A young female knight who wields swords and shields to fight in battlefields across multiple dimensions.',
  '0b2b0ac15e70d4fc9f4094b9a90937a6': 'An imperial knight who utilizes the destructive strength of the demonic lance.',
  '86c10841b1e4ddc6db7bd2fbe5e11519': "A combat personnel of 'The Company' who specializes in guns and swords.",
  dbbdf2dd28072b26f22b77454d665f21:
    'Celestians who set off on an adventure to save their home with their trusty bows in hand.',
  '4b3bc88bb6337d2e23ed3411b2435068': 'A slayer who released the demon from his arm.',
  c95dfe0d42b6c71bc8019fcca0b3eccd: 'A mage who awakened the power of the time.',
};

const SUPPLEMENTAL_JOBS = ['4b3bc88bb6337d2e23ed3411b2435068', 'c95dfe0d42b6c71bc8019fcca0b3eccd'];

export type FetchServersResponse = Job[];

export const fetchJobs = async (): Promise<FetchServersResponse> => {
  const searchParams = new URLSearchParams(`apikey=${API_KEY}`);

  return await fetch(`${API_URL}/jobs?${searchParams.toString()}`, {
    next: {
      revalidate: API_REVALIDATION,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      return res.rows
        .map((job) => {
          const isSupplementalJob = SUPPLEMENTAL_JOBS.includes(job.jobId);

          return {
            jobExplain: JOB_EXPLAIN[job.jobId],
            jobId: job.jobId,
            jobName: job.jobName,
            jobGrow: job.rows.map((jobGrow) => {
              const jobGrowName = (isSupplementalJob ? job.jobName : jobGrow.next.next.next.jobGrowName).replace(
                'Neo: ',
                '',
              );
              const jobGrowSlug = slugify(isSupplementalJob ? job.jobName : jobGrow.next.jobGrowName, {
                lower: true,
                strict: true,
              });

              return {
                jobGrowId: isSupplementalJob ? jobGrow.next.next.jobGrowId : jobGrow.next.next.next.jobGrowId,
                jobGrowImageSlug: `${slugify(job.jobName, { lower: true, strict: true })}-${slugify(jobGrowName, {
                  lower: true,
                  strict: true,
                })}`,
                jobGrowName,
                jobGrowSlug,
              };
            }),
          };
        })
        .sort((a: Job, b: Job) => {
          const aIndex = JOB_ORDER.indexOf(a.jobId);
          const bIndex = JOB_ORDER.indexOf(b.jobId);

          if (aIndex < bIndex) return -1;
          if (aIndex > bIndex) return 1;

          return 0;
        });
    });
};
