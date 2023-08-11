'use client';
import { Button } from '@several-ui/button';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { ComponentProps, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { twMerge } from 'tailwind-merge';

export type CharacterSearchBarProps = Pick<ComponentProps<'div'>, 'className'> & {
  characterName?: string;
};

export const CharacterSearchBar = ({ className, characterName = '' }: CharacterSearchBarProps) => {
  const { ref: inViewRef, inView, entry } = useInView();
  const router = useRouter();

  const isStickied = !inView && entry;

  const onSearch = useCallback(
    ({ characterName }: { characterName: string }) => {
      router.push(`/character/search/${characterName}`);
    },
    [router],
  );

  return (
    <>
      <div ref={inViewRef} />

      <Formik initialValues={{ characterName }} onSubmit={onSearch}>
        <Form
          className={twMerge(
            'sticky top-0 flex items-center justify-between gap-2 rounded border border-slate-7 bg-slate-3 p-4',
            isStickied ? 'rounded-t-none border-t-transparent shadow-lg' : undefined,
            className,
          )}
        >
          <Field
            autoFocus
            as='input'
            className='h-10 w-full rounded border-slate-5 bg-slate-1 px-4 text-sm text-slate-12'
            maxLength={12}
            minLength={4}
            name='characterName'
            placeholder='Enter character name'
            required
            type='search'
          />
          <Button size='lg'>Search</Button>
        </Form>
      </Formik>
    </>
  );
};
