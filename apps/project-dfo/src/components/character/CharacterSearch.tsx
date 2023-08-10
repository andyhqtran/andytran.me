'use client';
import { Button } from '@several-ui/button';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';

import { trackClickedCharacterSearchButton } from '~/analytics/trackClickedCharacterSearchButton';

export const CharacterSearch = () => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{ name: '', server: 'cain' }}
      onSubmit={({ name, server }) => {
        router.push(`/character/${server}/${name}`);
        trackClickedCharacterSearchButton({ name });
      }}
    >
      <Form className='flex items-center gap-4'>
        <Field
          className='h-8 gap-2 rounded border border-slate-6 bg-slate-3 px-3 text-sm text-slate-12'
          name='name'
          placeholder='Enter character name'
          required
          type='text'
        />

        <Field
          className='h-8 gap-2 rounded border border-slate-6 bg-slate-3 px-3 py-0 text-sm text-slate-12'
          component='select'
          required
          name='server'
        >
          <option value='cain'>Cain</option>
          <option value='sirocco'>Sirocco</option>
        </Field>

        <Button type='submit'>Search</Button>
      </Form>
    </Formik>
  );
};
