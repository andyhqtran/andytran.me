'use client';

import { Button } from '@several-ui/button';
import { useRouter } from 'next/navigation';

import { CharacterSearch } from '~/components/character/CharacterSearch';
import { Routes } from '~/constants/Routes';

export type CharacterRedirectProps = {
  current: string;
};

export const CharacterRedirect = ({ current }: CharacterRedirectProps) => {
  const router = useRouter();

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-base font-medium text-slate-12'>I&apos;m looking for this character on:</h1>
      <div className='flex gap-2'>
        <Button onClick={() => router.push(`${Routes.Character}/cain/${current}`)}>Cain</Button>
        <Button onClick={() => router.push(`${Routes.Character}/sirocco/${current}`)}>Sirocco</Button>
      </div>
      <h2 className='text-base font-medium text-slate-12'>Or start a new search:</h2>
      <CharacterSearch />
    </div>
  );
};
