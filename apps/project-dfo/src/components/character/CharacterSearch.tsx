'use client';
import { Button } from '@several-ui/button';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';

import { trackClickedCharacterSearchButton } from '~/analytics/trackClickedCharacterSearchButton';

export const CharacterSearch = () => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={({ name }) => {
        router.push(`/character/${name}`);
        trackClickedCharacterSearchButton({ name });
      }}
    >
      <Form className='flex items-center gap-4'>
        <Field
          className='h-8 gap-2 rounded border border-slate-6 bg-slate-3 px-3 text-sm text-slate-12'
          name='name'
          placeholder='Enter character name'
          type='text'
        />

        <Button type='submit'>Search</Button>
      </Form>
    </Formik>
  );
};
