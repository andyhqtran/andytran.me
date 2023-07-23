import { RocketIcon } from '@radix-ui/react-icons';
import { IconButton } from '@several-ui/icon-button';

export default function Page() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex gap-4'>
        <IconButton appearance='default' color='blue'>
          <RocketIcon />
        </IconButton>
        <IconButton appearance='ghost' color='blue'>
          <RocketIcon />
        </IconButton>
        <IconButton appearance='outline' color='blue'>
          <RocketIcon />
        </IconButton>
        <IconButton appearance='text' color='blue'>
          <RocketIcon />
        </IconButton>
      </div>

      <div className='flex gap-4'>
        <IconButton appearance='default' color='green'>
          <RocketIcon />
        </IconButton>
        <IconButton appearance='ghost' color='green'>
          <RocketIcon />
        </IconButton>
        <IconButton appearance='outline' color='green'>
          <RocketIcon />
        </IconButton>
        <IconButton appearance='text' color='green'>
          <RocketIcon />
        </IconButton>
      </div>

      <div className='flex gap-4'>
        <IconButton appearance='default' color='red'>
          <RocketIcon />
        </IconButton>
        <IconButton appearance='ghost' color='red'>
          <RocketIcon />
        </IconButton>
        <IconButton appearance='outline' color='red'>
          <RocketIcon />
        </IconButton>
        <IconButton appearance='text' color='red'>
          <RocketIcon />
        </IconButton>
      </div>

      <div className='flex gap-4'>
        <IconButton appearance='default' color='slate'>
          <RocketIcon />
        </IconButton>
        <IconButton appearance='ghost' color='slate'>
          <RocketIcon />
        </IconButton>
        <IconButton appearance='outline' color='slate'>
          <RocketIcon />
        </IconButton>
        <IconButton appearance='text' color='slate'>
          <RocketIcon />
        </IconButton>
      </div>

      <div className='flex gap-4'>
        <IconButton appearance='default' color='yellow'>
          <RocketIcon />
        </IconButton>
        <IconButton appearance='ghost' color='yellow'>
          <RocketIcon />
        </IconButton>
        <IconButton appearance='outline' color='yellow'>
          <RocketIcon />
        </IconButton>
        <IconButton appearance='text' color='yellow'>
          <RocketIcon />
        </IconButton>
      </div>
    </div>
  );
}
