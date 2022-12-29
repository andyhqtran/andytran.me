import { Article } from '@several/components';

export default function Page() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-xl font-semibold text-slate-12'>Resources</h1>
        <p className='text-sm text-slate-11'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <Article
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          href='/'
          thumbnail='https://images.unsplash.com/photo-1672330145556-18b0f0037b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          title='Post'
        />
        <Article
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          href='/'
          thumbnail='https://images.unsplash.com/photo-1672330145556-18b0f0037b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          title='Post'
        />
        <Article
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          href='/'
          thumbnail='https://images.unsplash.com/photo-1672330145556-18b0f0037b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          title='Post'
        />
        <Article
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          href='/'
          thumbnail='https://images.unsplash.com/photo-1672330145556-18b0f0037b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          title='Post'
        />
      </div>
    </div>
  );
}
