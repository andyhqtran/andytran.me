import { Spinner } from '@several-ui/spinner';

export const FrameSkeleton = () => {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <Spinner className='text-blue-9' />
    </div>
  );
};
